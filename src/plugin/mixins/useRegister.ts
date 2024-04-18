import {
  inject,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import type { ComponentInternalInstance } from "vue";

import {
  eventReg,
  convertEventToLowerCase,
  bindInstanceEvent,
  removeInstanceEvent,
} from "../utils";

export type TRegisterFn = () => void;
export interface IProvideType {
  // 父组件实例
  __component: any;
  // // 父组件用来缓存需要执行注册的回调
  // needInitComponents: TRegisterFn[]
  // 当组件初始化的时候如果父组件还未初始化成功，那么需要调用该方法将自身的初始化方法注册到父组件中
  addChildComponent: (cb: TRegisterFn) => void;
  // 父组件是否已经销毁
  isDestroy: boolean;
  [key: string]: any;
}

interface TInitComponentProps {
  // 属性名重定向
  propsRedirect?: Record<string, string>;
  emits: (event: any, ...args: any[]) => void;
  // 转化数据使用
  converts?: Record<string, (val: any) => any>;
  // 是否是根节点，只用于map组件初始化使用
  isRoot?: boolean;
  // 需要初始化的子组件
  needInitComponents?: TRegisterFn[];
  provideData?: IProvideType;
  destroyComponent?: () => void;
}

export const provideKey = "parentInstance";

export const useRegister = <T>(
  _init: (options: any, parentComponent: any) => Promise<T>,
  params: TInitComponentProps
) => {
  let componentInstance = getCurrentInstance() as ComponentInternalInstance;
  let { props, attrs } = componentInstance;
  let parentInstance = inject<IProvideType | undefined>(provideKey, undefined);
  const emits = params.emits;

  let isMounted = false;
  let __currentComponent: T; // 注册后，实例化的组件 promise.resolve 传递进来的

  onMounted(() => {
    if (parentInstance) {
      if (parentInstance.__component) {
        register();
      } else {
        parentInstance.addChildComponent(register);
      }
    } else if (params.isRoot) {
      register();
    }
  });

  onBeforeUnmount(() => {
    if (!__currentComponent) {
      return;
    }
    unregisterEvents();

    if (params.destroyComponent) {
      params.destroyComponent();
    } else {
      destroyComponent();
    }

    if (params.provideData) {
      params.provideData.isDestroy = true;
    }

    parentInstance = undefined;
    props = undefined as any;
    attrs = undefined as any;
    componentInstance = undefined as any;
    __currentComponent = undefined as any;
  });

  onBeforeUpdate(() => {
    if (isMounted && __currentComponent) {
      unregisterEvents();
    }
  });

  onUpdated(() => {
    if (isMounted && __currentComponent) {
      registerEvents();
    }
  });

  const register = () => {
    const options = convertProps();
    // 只有初始化视图的时候传递进来的是一个对象，包含 map mapView
    _init(options, parentInstance?.__component).then((instance) => {
      __currentComponent = instance;
      emits("init", instance);
      registerEvents();
      createChildren(); // 这里是否有必要放在 nextTick 里？
      isMounted = true;
    });
  };

  const propsRedirect = params.propsRedirect || {};
  const convertProps = () => {
    const propsCache: Record<string, any> = {};
    if (props.extraOptions) {
      Object.assign(propsCache, props.extraOptions);
    }
    Object.keys(props).forEach((_key) => {
      let key = _key;
      const propsValue = convertSignalProp(key, props[key]);
      if (propsValue !== undefined) {
        if (propsRedirect && propsRedirect[_key]) {
          key = propsRedirect[key];
        }
        propsCache[key] = propsValue;
      }
    });
    return propsCache;
  };

  const converters = params.converts || {};
  const convertSignalProp = (key: string, sourceData: any) => {
    if (converters && converters[key]) {
      return converters[key].call(this, sourceData);
    }
    return sourceData;
  };

  const cacheEvents: Record<string, any> = {};
  const registerEvents = () => {
    // 如果是 map 和 mapView 的情况，事件在 mapView 身上
    const com =
      __currentComponent.constructor === Object
        ? __currentComponent?.mapView
        : __currentComponent;
    // TODO：读取了 透传的事件，还有一些透传的属性呢？!!! 比如 class 这种，直接在模版上配置？inheritAttrs 一般都设置 false 了
    Object.keys(attrs).forEach((key) => {
      if (eventReg.test(key)) {
        const eventKey = convertEventToLowerCase(key);
        bindInstanceEvent(com, eventKey, attrs[key]);
        cacheEvents[eventKey] = attrs[key];
      }
    });
  };
  const unregisterEvents = () => {
    const com =
      __currentComponent.constructor === Object
        ? __currentComponent?.mapView
        : __currentComponent;

    Object.keys(cacheEvents).forEach((eventKey) => {
      removeInstanceEvent(com, eventKey, cacheEvents[eventKey]);
      delete cacheEvents[eventKey];
    });
  };

  const createChildren = () => {
    const needInitComponents = params.needInitComponents || [];
    while (needInitComponents.length > 0) {
      needInitComponents[0]();
      needInitComponents.splice(0, 1);
    }
  };

  // 销毁组件时的回调
  const destroyComponent = () => {
    if (!__currentComponent) {
      return;
    }
    if (__currentComponent.constructor === Object) {
      const { mapView } = __currentComponent;
      (mapView as any).destroy && (mapView as any).destroy();
    }
    // Destroys the view, and any associated resources, including its map, popup, and UI elements.
  };
  const $$getInstance = () => {
    return __currentComponent;
  };

  return {
    isMounted,
    $$getInstance,
    parentInstance,
  };
};
