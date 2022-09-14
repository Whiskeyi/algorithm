const n = [22, 2];
const str = 'mihoyoyomihoyomimihoyo';
const getResult = (n, str) => {
  let m = n[0]; // 22
  let k = n[1]; // 2
  let saveIndex = []; // 0, 8, 16
  let sum = 0;
  let index = str.indexOf('mihoyo')
  while (index !== -1) {
    saveIndex.push(index)
    sum++;
    index = str.indexOf('mihoyo', index + 1)
  }
  if (saveIndex.length < k) {
    return -1
  }
  let start = saveIndex[0];
  let end = saveIndex[k - 1];
  let minLen = end - start; // 8
  for (let i = 0; i < saveIndex.length - k; i++) {
    if (minLen >= (saveIndex[k - 1 + i] - saveIndex[i])) {
      minLen = Math.min(minLen, saveIndex[k - 1 + i] - saveIndex[i])
      start = saveIndex[i];
      end = saveIndex[k - 1 + i];
    }
  }
  return `${start} ${end + 5}`
}

console.log(getResult(n, str))