// ファイルへの書き込み
// __dirname, __filename

// common jsのインポートの方法
const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist/test.txt');
console.log(distPath);

// console.log(__dirname);
// console.log(__filename);

fs.writeFileSync(distPath, 'hello, node.js');
// console.log('hello, node.js');
