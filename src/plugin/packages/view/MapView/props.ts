/**
 * 包含 arcgis/core4 mapView 和 map 的常用参数
 * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#properties-summary
 */
import { buildProps } from "../../../utils/buildHelper";
export const propsType = buildProps({
  container: {
    type: String,
  },
  constraints: {
    type: Object,
  },
  center: {
    type: Array,
    default: [120.210792, 30.246026],
  },
  zoom: {
    type: Number,
    default: 6,
  },
  spatialReference: {
    type: Object,
    default: {
      wkid: 4490,
    },
  },
  basemap: {
    type: Object,
  },
  layers: {
    type: Array,
  },
});
