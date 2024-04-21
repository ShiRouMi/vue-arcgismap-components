import MapView from './MapView.vue'
import type { Plugin, App } from 'vue'

MapView.install = (app: App) => {
  app.component(MapView.name as string, MapView)
}

export const ArcgisMapView = MapView as typeof MapView & Plugin
export default ArcgisMapView

export type ArcgisMapViewInstance = InstanceType<typeof ArcgisMapView>
