import * as http from "http";

/**
 * リクエストメソッド
 *
 * GETメソッド：　コンテンツの取得
 * 　　タイミング：ブラウザのURLの指定、リンクのクリック、<form>のデフォルト
 * 　　特徴：URLの一部にパラメータを渡す
 *
 * POSTメソッド：　コンテンツの作成
 * 　　タイミング：<form>のPOSTメソッド
 * 　　特徴：リクエストの本文にパラメータを渡す
 */

const server = http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'});
    console.log(req.url);

    if (req.url === '/') {

        res.end('<a href="/result">Get Method Link</a>');
    } else if (req.url === '/bye') {
        res.end('bye');
    } else {
        res.end(req.url);
    }});

// サーバーが立ち上がる
server.listen(8080);