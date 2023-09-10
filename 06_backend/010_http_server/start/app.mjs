//簡易的なサーバーを作る方法
import * as http from "http";

//content-type
// ブラウザとサーバーが通信しているコンテンツのフォーマットと文字コードの情報

const server = http.createServer(function (req, res){
    console.log(req.url);
    // res.writeHead(200,{'content-type': 'text/html; charset=UTF-8'});
    //ブラウザ上でしか動作しないので、記述するとクラッシュする
    // window.alert("メッセージ");

    if (req.url === '/hello') {
        // res.end('<h1>こんにちは</h1>');
        //res.endは1回だけしか呼べない
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>こんにちは</h1>
</body>
</html>`)
    } else if (req.url === '/bye') {
        res.end('bye');
    }
});

// サーバーが立ち上がる
server.listen(8080);