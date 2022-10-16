// let arr1 = JSON.parse(JSON.stringify(readline()));
// let arr2 = JSON.parse(JSON.stringify(readline()));
let arr1 = JSON.parse(readline());
let arr2 = JSON.parse(readline());

let map = new Map();

let commonArr = arr1.concat(arr2);
let common = [];
for (key of commonArr) {
  common.push(key)
}

for (let num of common) {
  map.set(num, map.get(num) + 1 || 1)
}

let saveIndex = [];

[...map.values()].forEach((item, index) => {
  if (item > 1) saveIndex.push(index)
})

let rz = [];

saveIndex.forEach(item => rz.push([...map.keys()][item]))

console.log(JSON.stringify(rz.sort((a, b) => a - b)))