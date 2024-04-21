import MarkerSymbol from "./MarkerSymbol.vue";
import type { Plugin, App } from "vue";

MarkerSymbol.install = (app: App) => {
  app.component(MarkerSymbol.name as string, MarkerSymbol);
};

export const ArcgisMarkerSymbol = MarkerSymbol as typeof MarkerSymbol & Plugin;
export default ArcgisMarkerSymbol;

export type ArcgisMarkerSymbolInstance = InstanceType<
  typeof ArcgisMarkerSymbol
>;
