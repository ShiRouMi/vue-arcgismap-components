import GraphicsLayer from "./GraphicsLayer.vue";
import type { Plugin, App } from "vue";
GraphicsLayer.install = (app: App) => {
  app.component(GraphicsLayer.name, GraphicsLayer);
  return app;
};
export const ArcgisGraphicsLayer = GraphicsLayer as typeof GraphicsLayer &
  Plugin;
export default ArcgisGraphicsLayer;

export type ArcgisGraphicsLayerInstance = InstanceType<typeof GraphicsLayer>;
