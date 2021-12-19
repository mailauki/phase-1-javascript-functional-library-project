function isArray(collection) {
  let theCollection;
  if(Array.isArray(collection)) {theCollection = collection}
  else {theCollection = Object.values(collection)}
  return theCollection
}

function myEach(collection, callback) {
  isArray(collection).forEach(callback)
  return collection
}

function myMap(collection, callback) {
  return isArray(collection).map(callback)
}

function myReduce(collection, callback, acc) {
  if(acc === undefined) {return isArray(collection).reduce(callback)}
  else {return isArray(collection).reduce(callback, acc)}
}

function myFind(collection, predicate) {
  return isArray(collection).find(predicate)
}

function myFilter(collection, predicate) {
  return isArray(collection).filter(predicate)
}

function mySize(collection) {
  return isArray(collection).length
}

function myFirst(array, n) {
  if(n === undefined) {return array[0]}
  else {return array.slice(0, n)}
}

function myLast(array, n) {
  const last = array.length -1
  if(n === undefined) {return array[last]}
  else {return array.slice(-n)}
}

function mySortBy() {}

function myFlatten() {}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}
