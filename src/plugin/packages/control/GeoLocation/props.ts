export const propsType = {
  container: {
    type: String
  },
  view: {
    type: Object
  },
  // Indicates whether to display the Popup of the result graphic from the locate() method.
  popupEnabled: {
    type: Boolean,
    default: false
  },
  location: {
    type: String,
    default: 'top-left'
  }
}
