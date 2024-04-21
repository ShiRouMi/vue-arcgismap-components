<script setup lang="ts">
import { defineOptions } from "vue";
import { useRegister } from "../../../../mixins";
import { propsType } from "./props";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

defineOptions({
  name: "ArcgisGraphicsLayer",
  inheritAttrs: false,
});

defineProps(propsType);
const emits = defineEmits(["init"]);

let graphicsLayer: any;

const { $$getInstance } = useRegister(
  (options, parentComponent) => {
    const { map } = parentComponent;
    return new Promise((resolve) => {
      graphicsLayer = new GraphicsLayer(options);
      map.add(graphicsLayer);
      resolve(graphicsLayer);
    });
  },
  {
    emits,
  }
);

defineExpose({
  getInstance: $$getInstance,
});
</script>
