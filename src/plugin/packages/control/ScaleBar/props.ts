// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html
import { buildProps } from "../../../utils/buildHelper";
export const propsType = buildProps({
  container: {
    type: String,
  },
  view: {
    type: Object,
  },
  viewModel: {
    type: Object,
  },
  location: {
    type: String,
    default: "bottom-left",
  },
  unit: {
    type: String, // Possible Values:"metric"|"imperial"|"dual"|"non-metric"
    default: "metric",
  },
  style: {
    type: String, // "ruler"|"line"
    default: "line",
  },
  visible: {
    type: Boolean,
    default: "true",
  },
});
