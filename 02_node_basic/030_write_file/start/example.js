// ファイルへの書き込み
// __dirname, __filename

// common jsのインポートの方法
const fs = require('fs');

// console.log(__dirname);
// console.log(__filename);

fs.writeFileSync(__dirname + '/test.txt', 'hello, node.js');
// console.log('hello, node.js');
