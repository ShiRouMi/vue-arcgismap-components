import GeoLocation from './GeoLocation.vue'
import type { Plugin, App } from 'vue'
GeoLocation.install = (app: App) => {
  app.component(GeoLocation.name, GeoLocation)
  return app
}
export const ArcgisControlGeoLocation = GeoLocation as typeof GeoLocation & Plugin
export default ArcgisControlGeoLocation

export type ArcgisControlGeoLocationInstance = InstanceType<typeof ArcgisControlGeoLocation>
