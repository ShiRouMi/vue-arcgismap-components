import ScaleBar from "./ScaleBar.vue";
import type { Plugin, App } from "vue";
ScaleBar.install = (app: App) => {
  app.component(ScaleBar.name, ScaleBar);
  return app;
};
export const ArcgisControlScaleBar = ScaleBar as typeof ScaleBar & Plugin;
export default ArcgisControlScaleBar;

export type ArcgisControlScaleBarInstance = InstanceType<
  typeof ArcgisControlScaleBar
>;
