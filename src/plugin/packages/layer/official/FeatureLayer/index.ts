import FeatureLayer from './FeatureLayer.vue'
import type { Plugin, App } from 'vue'
FeatureLayer.install = (app: App) => {
  app.component(FeatureLayer.name, FeatureLayer)
  return app
}
export const ArcgisFeatureLayer = FeatureLayer as typeof FeatureLayer & Plugin
export default ArcgisFeatureLayer

export type ArcgisFeatureLayerInstance = InstanceType<typeof FeatureLayer>
