# vue-arcgismap-components

基于 Vue 3.x 和 ArcGIS Maps SDK for JavaScript 4.x (@arcgis/core)的地图组件库

## 安装

```
npm i @arcgis/core
npm i vue-arcgismap-components
```

## 快速上手

引入 vue-arcgismap-components

```javascript
import VueArcgismap from "vue-arcgismap-components";
import "vue-arcgismap-components/dist/style.css";

createApp(App).use(VueArcgismap);
```

## 地图

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

### Attributes

| 名称      | 类型   | 说明        | 默认值                  |
| --------- | ------ | ----------- | ----------------------- |
| container | String | 容器 dom-id | 随机值                  |
| center    | Array  | 地图中心点  | [120.210792, 30.246026] |
| basemap   | Array  | 底图图层    | --                      |

### 事件

| 事件名 | 说明                                                                                                                                | Type     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------- |
| init   | 该实例化后，参数为拥有 map、view 实例的对象                                                                                         | Function |
| --     | 拥有与 MapView 上一样的 Events https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events-summary | Function |

### 方法

| 函数            | 返回                      | 说明               |
| --------------- | ------------------------- | ------------------ |
| $$getInstance() | 拥有 map、view 实例的对象 | 获取地图、视图实例 |

## 定位 Locate

```js
<ArcgisControlGeoLocation @init="init" @locate="locate" />

const init = (obj) => {
  console.log("init", obj);
};
const locate = (position) => {
  console.log("position", position);
};
```

### Attributes

| 名称         | 类型    | 说明                                                             | 默认值       |
| ------------ | ------- | ---------------------------------------------------------------- | ------------ |
| container    | String  | 容器 dom-id                                                      | ''           |
| popupEnabled | Boolean | 是否显示结果图形的 popup                                         | false        |
| location     | String  | 定位图标所处位置(top-right, top-left, bottom-left, bottom-right) | bottom-right |

### 事件

| 事件名 | 说明                                                                                                                                | Type     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------- |
| init   | 该实例化后，参数为拥有 map、view 实例的对象                                                                                         | Function |
| --     | 拥有与 Locate 上一样的 Events https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Locate.html#events-summary | Function |

### 方法

| 函数            | 返回        | 说明             |
| --------------- | ----------- | ---------------- |
| $$getInstance() | Locate 实例 | 获取 Locate 实例 |

## FeatureLayer

### Attributes

| 名称    | 类型    | 说明         | 默认值 |
| ------- | ------- | ------------ | ------ |
| url     | String  | 图层地址     | ''     |
| visible | Boolean | 图层是否可见 | true   |

### 事件

| 事件名 | 说明                                                                                                                                           | Type     |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| init   | 该实例化后，参数为拥有 map、view 实例的对象                                                                                                    | Function |
| --     | 拥有与 FeatureLayer 上一样的 Events https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#events-summary | Function |

### 方法

| 函数            | 返回              | 说明                   |
| --------------- | ----------------- | ---------------------- |
| $$getInstance() | FeatureLayer 实例 | 获取 FeatureLayer 实例 |
