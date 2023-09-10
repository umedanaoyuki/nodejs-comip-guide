//簡易的なサーバーを作る方法
import * as http from "http";

//content-type
// ブラウザとサーバーが通信しているコンテンツのフォーマットと文字コードの情報

const server = http.createServer(function (req, res){
    console.log(req.url);
    // res.writeHead(302,{location: '/redirected'});
    //ブラウザ上でしか動作しないので、記述するとクラッシュする
    // window.alert("メッセージ");

    if (req.url === '/hello') {
        //helloでアクセスしたら 302レスポンスの/redirectedへリダイレクトするようにする
        res.writeHead(302, {location: '/redirected'});
        //そのため、ここには行かない
        res.end('<h1>こんにちは</h1>');
    } else if (req.url === '/bye') {
        res.end('bye');
    } else {
        //redirectedされたURLを返す
        res.end(req.url);
    }});

// サーバーが立ち上がる
server.listen(8080);