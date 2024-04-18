export const eventReg = /^on[A-Z]+/
/**
 * 将$props中的事件名称转换为地图组件需要的事件名
 * @param functionName
 * @returns {string|*}
 */
export function convertEventToLowerCase(functionName: string) {
  if (!functionName || functionName.length < 4) {
    return functionName
  }
  const func = functionName.substring(3, functionName.length)
  const firstLetter = functionName[2].toLowerCase()
  return firstLetter + func
}
