export const commonProps = {
  // 额外参数，用于在初始化组件时提供prop中未定义的属性
  extraOptions: {
    type: Object,
  },
};

/**
 * 合并生成基础的属性
 * @param props
 */
export const buildProps = (props: any) => {
  return Object.assign({}, commonProps, props);
};
