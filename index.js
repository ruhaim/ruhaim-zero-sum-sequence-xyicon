// run `node index.js` in the terminal
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('sample.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

console.log(`Hello Node.js v${process.versions.node}!`);


