import type { Plugin } from 'vue'
import { ArcgisMapView } from './packages/MapView'
import { ArcgisControlGeoLocation } from './packages/control/GeoLocation'
import { ArcgisFeatureLayer } from './packages/layer/official/FeatureLayer'

export default [ArcgisMapView, ArcgisControlGeoLocation, ArcgisFeatureLayer] as Plugin[]
