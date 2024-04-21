import { buildProps } from "../../../../utils/buildHelper";
export const propsType = buildProps({
  id: {
    type: String,
  },
  url: {
    type: String,
  },
  outFields: {
    type: Array,
    default: ["*"],
  },
  definitionExpression: {
    type: String,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
