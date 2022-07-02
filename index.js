const lineByLine = require('n-readlines');
const inputFilePath = process.argv[2]

if(!inputFilePath){
  throw Error("inputFilePath not found, Pass the input file path as an arg to yarn start")
}
const liner = new lineByLine(inputFilePath);

const totalCases = parseInt(liner.next().toString());
for (let i = 0; i < totalCases; i++) {
  const numsPerArr = parseInt(liner.next().toString());
  const input = liner
    .next()
    .toString()
    .split(' ')
    .map((s) => parseInt(s.trim()));
  console.log(hasZeroSum(input));
}

function hasZeroSum(arr) {
  const prefixSum = Array(arr.length + 2).fill(0);
  const prevSeenMap = { 0: true };

  const result = arr.some((num, idx) => {
    prefixSum[idx + 1] += prefixSum[idx] + num;
    const isPrevSeen = prevSeenMap[prefixSum[idx + 1]];

    if (isPrevSeen) {
      return true;
    } else {
      prevSeenMap[prefixSum[idx + 1]] = true;
    }
  });

  return result ? 'yes' : 'no';
}
