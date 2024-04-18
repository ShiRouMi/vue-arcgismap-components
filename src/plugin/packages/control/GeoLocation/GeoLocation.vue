<!-- template 无内容 -->
<script setup lang="ts">
import { defineOptions } from "vue";
import Locate from "@arcgis/core/widgets/Locate";
import { propsType } from "./props";
import { useRegister } from "../../../mixins";
defineOptions({
  name: "ArcgisControlGeoLocation",
  inheritAttrs: false,
});

defineProps(propsType);

const emits = defineEmits(["init"]);

let locateWidget;
const { $$getInstance } = useRegister(
  (options: any, parentComponent: any) => {
    const { mapView } = parentComponent;
    return new Promise((resolve) => {
      locateWidget = new Locate({
        ...options,
        view: mapView,
      });
      mapView.ui.add(locateWidget, options.location);
      // TODO: events 向外暴露
      resolve(locateWidget);
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
