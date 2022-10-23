const N = 5;
const arr = [11.9, 12, 14, 16, 18, 18.1, 33, 98, 99]
const getResult = (N, arr) => {
  let len = arr.length
  let min = Infinity;

  let [saveStart, saveEnd] = [0, 0]
  for (let i = 0; i <= len - N; i++) {
    for (let j = i + N - 1; j <= arr.length; j++) {
      if (((arr[j] - arr[i]) / (j - i + 1)) < min) {
        min = (arr[j] - arr[i]) / (j - i + 1)
        saveStart = i
        saveEnd = j
      }
    }
  }
  return [saveStart, saveEnd]
}
let rz = getResult(N, arr)
console.log(`${arr[rz[0]].toFixed(4)},${arr[rz[1]].toFixed(4)}`)