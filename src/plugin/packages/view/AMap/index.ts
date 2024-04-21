import Amap from "./AMap.vue";
import type { Plugin, App } from "vue";

Amap.install = (app: App) => {
  app.component(Amap.name, Amap);
};

export const ArcgisMap = Amap as typeof Amap & Plugin;
export default ArcgisMap;

export type ArcgisMapInstance = InstanceType<typeof ArcgisMap>;
