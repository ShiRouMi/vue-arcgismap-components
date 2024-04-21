export const propsType = {
  id: {
    type: String,
  },
  url: {
    type: String,
  },
  outFields: {
    type: Array,
    default: ["*"],
  },
  definitionExpression: {
    type: String,
  },
  visible: {
    type: Boolean,
  },
};
