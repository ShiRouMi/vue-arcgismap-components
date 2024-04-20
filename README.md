# vue-arcgismap-components

基于 vue 3.x 和 ArcGIS Maps SDK for JavaScript 4.x 的地图组件库

## 安装

```
npm i vue-arcgismap-components
```

## 快速上手

引入 vue-arcgismap-components

```javascript
import VueArcgismap from "vue-arcgismap-components";
import "vue-arcgismap-components/dist/style.css";

createApp(App).use(VueArcgismap);
```

### 地图

```js
<ArcgisMapView :basemap="basemap" @init="init" @click="click">
</ArcgisMapView>

const init = (obj) => {
  console.log("init", obj.mapView, obj.map);
};
const click = (e) => {
  console.log("e", e);
};
```
