<script setup lang="ts">
import { defineOptions } from 'vue'
import { useRegister } from '../../../../mixins'
import { propsType } from './props'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

defineOptions({
  name: 'ArcgisFeatureLayer',
  inheritAttrs: false
})

defineProps(propsType)
const emits = defineEmits(['init'])

let featureLayer: any

const { $$getInstance } = useRegister(
  (options, parentComponent) => {
    const { map } = parentComponent
    return new Promise((resolve) => {
      featureLayer = new FeatureLayer(options)
      map.add(featureLayer)
      resolve(featureLayer)
    })
  },
  {
    emits
  }
)

defineExpose({
  getInstance: $$getInstance
})
</script>
