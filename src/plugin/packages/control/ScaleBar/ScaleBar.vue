<!-- template 无内容 -->
<script setup lang="ts">
import { defineOptions } from "vue";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import { propsType } from "./props";
import { useRegister } from "../../../mixins";
defineOptions({
  name: "ArcgisControlScaleBar",
  inheritAttrs: false,
});

defineProps(propsType);

const emits = defineEmits(["init"]);

let scaleBar;
const { $$getInstance } = useRegister(
  (options: any, parentComponent: any) => {
    const { mapView } = parentComponent;
    return new Promise((resolve) => {
      scaleBar = new ScaleBar({
        ...options,
        view: mapView,
      });
      mapView.ui.add(scaleBar, options.location);
      resolve(scaleBar);
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
