const creators = ["alice", "bob", "alice", "chris"],
  ids = ["one", "two", "three", "four"],
  views = [5, 10, 5, 4]

// const creators = ["alice", "alice", "alice"], ids = ["a", "b", "c"], views = [1, 2, 2]

// const creators = ["a"], ids = ["a"], views = [0]

var mostPopularCreator = function (creators, ids, views) {
  let popularMap = new Map()
  for (let i = 0; i < creators.length; i++) {
    popularMap.set(creators[i], popularMap.get(creators[i]) + views[i] || views[i])
  }
  let popularMax = -Infinity
  let outputCreator = []
  for (let k = 0; k < [...popularMap.keys()].length; k++) {
    if ([...popularMap.values()][k] > popularMax) {
      popularMax = [...popularMap.values()][k]
      outputCreator = []
      outputCreator.push([...popularMap.keys()][k])
      continue
    }
    if ([...popularMap.values()][k] === popularMax) {
      outputCreator.push([...popularMap.keys()][k])
    }
  }
  let rz = [];
  for (let create of outputCreator) {
    let viewMax = -Infinity
    let currRz = []
    for (let j = 0; j < creators.length; j++) {
      if (create === creators[j]) {
        if (views[j] > viewMax) {
          viewMax = views[j]
          currRz = []
          currRz.push(create, ids[j])
          continue
        }
      }
    }
    rz.push(currRz)
  }
  return rz
}

console.log(mostPopularCreator(creators, ids, views))