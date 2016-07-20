var recipes;
recipes = {'prop': 1};

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj;
  obj = Object.assign({}, recipes);
  obj[key] = value;
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}
function deleteFromObjectByKey(obj, key) {
  var obj;
  obj = Object.assign({}, recipes);
  delete obj[key];
  return obj
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj
}
