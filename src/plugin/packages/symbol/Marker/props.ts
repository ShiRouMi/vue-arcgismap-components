/**
 * https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-MarkerSymbol.html
 */
import { buildProps } from "../../../utils/buildHelper";
export const propsType = buildProps({
  angle: {
    type: Number,
  },
  type: {
    type: Object,
  },
  xoffset: {
    type: Number,
  },
  yoffset: {
    type: Number,
  },
});
