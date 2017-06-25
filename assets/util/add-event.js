/**
 * @method addEvent 添加事件
 * @param ele 目标元素
 * @param eve event
 */
export const addEvent = (ele, eve, callback, addListenerFlag) => {
  addListenerFlag = addListenerFlag || false;
  if (ele.addEventListener) {
    // 添加事件
    ele.addEventListener(eve, callback, addListenerFlag);
  } else if (ele.attchEvent) {
    // lte IE8
    ele.attchEvent(`on${eve}`, callback);
  } else if ((`on${eve}`) in ele) {
    // 覆盖事件
    ele[`on${eve}`] = callback;
  } else {
    // error
    throw new Error(`sorry ${ele} don't have ${eve} event`);
  }
}
