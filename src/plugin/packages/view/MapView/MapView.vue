<template>
  <div class="map-view">
    <div class="map-div" :id="mapDomId"></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref, onBeforeUnmount, nextTick, provide } from "vue";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { propsType } from "./props";
import guid from "../../../utils/guid";
import {
  useRegister,
  provideKey,
  type IProvideType,
  type TRegisterFn,
} from "../../../mixins";
defineOptions({
  name: "ArcgisMapView",
  inheritAttrs: false,
});
const needInitComponents: TRegisterFn[] = []; // 需要注册的组件列表
const provideData: IProvideType = {
  __component: undefined,
  addChildComponent(cb) {
    needInitComponents.push(cb);
  },
  isDestroy: false,
};

provide(provideKey, provideData); // 父组件 provide， 供子组件访问

const props = defineProps(propsType);
const emits = defineEmits(["init"]);
const mapDomId = ref<string>(props.container || guid());

let mapView: MapView;
let map: Map;

// TODO： 优化
const operateViewWidgets = () => {
  mapView.ui.remove(["zoom", "attribution"]);
};

const { $$getInstance } = useRegister(
  (options: any) => {
    return new Promise((resolve) => {
      map = new Map({
        basemap: options.basemap,
      });
      mapView = new MapView({
        ...options,
        container: mapDomId.value,
        map,
      });
      provideData.__component = {
        map,
        mapView,
      };
      operateViewWidgets();
      resolve({
        mapView,
        map,
      });
    });
  },
  {
    isRoot: true,
    emits,
    provideData,
    needInitComponents,
  }
);

defineExpose({
  getInstance: $$getInstance,
});
</script>
<style>
.esri-view {
  --esri-view-outline: none !important;
}
.map-view {
  height: 100%;
  position: relative;
}

.map-div {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
