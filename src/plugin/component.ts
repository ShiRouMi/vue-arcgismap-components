import type { Plugin } from "vue";
import { ArcgisMapView } from "./packages/view/MapView";
import { ArcgisControlGeoLocation } from "./packages/control/GeoLocation";
import { ArcgisControlScaleBar } from "./packages/control/ScaleBar";
import { ArcgisFeatureLayer } from "./packages/layer/official/FeatureLayer";
import { ArcgisGraphicsLayer } from "./packages/layer/official/GraphicsLayer";

export default [
  ArcgisMapView,
  ArcgisControlGeoLocation,
  ArcgisControlScaleBar,
  ArcgisFeatureLayer,
  ArcgisGraphicsLayer,
] as Plugin[];
