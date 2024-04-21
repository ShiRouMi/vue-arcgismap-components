import { buildProps } from "../../../utils/buildHelper";
export const propsType = buildProps({
  basemap: {
    type: Object,
  },
  layers: {
    type: Array,
  },
});
