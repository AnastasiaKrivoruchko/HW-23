let objFirst = {x: 10, y: 20};
let objSecond = {y: 100, z: 30};

function assignObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(assignObjects(objFirst, objSecond));