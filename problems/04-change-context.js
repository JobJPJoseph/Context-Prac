function changeContext(func, obj) {
  // Your code here
  // const funcBindObj = func.bind(obj);
  // return funcBindObj();
  // return func.bind(obj)();
  return func.call(obj);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
