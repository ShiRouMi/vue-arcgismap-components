<template>
  <div>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { provide, defineOptions, onBeforeUnmount } from "vue";
import Map from "@arcgis/core/Map";
import { propsType } from "./props";
import {
  useRegister,
  provideData,
  provideKey,
  type IProvideType,
  type TRegisterFn,
} from "../../mixins";

defineOptions({
  name: "ArcgisMap",
  inheritAttrs: false,
});

const props = defineProps(propsType);

let _map: Map;
const getInstance = useRegister(
  (options: any) => {
    return new Promise((resolve) => {
      _map = new Map(options);
      provideData.$amapComponent = _map;
      resolve(_map);
    });
  },
  {
    isRoot: true,
  }
);

onBeforeUnmount(() => {
  if (_map) {
    _map.destroy();
    _map = null as any;
  }
});
defineExpose({
  getInstance,
});
</script>
<style>
div {
  width: 100vw;
  height: 100vh;
}
</style>
