import { buildProps } from "../../../../utils/buildHelper";
export const propsType = buildProps({
  graphics: {
    type: Object,
  },
  title: {
    type: String,
  },
  visible: {
    type: Boolean,
  },
});
