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
        //返却したい内容を追加するときにはwriteを記述する
        res.write('<a href="/result?param1=パラメータ1&param2=パラメータ2">Get Method Link</a>');
        res.end(`<form action="/result" method="post">
                    <input type="text" name="title">
                    <input type="submit">
                </form>`)
    } else {
        console.log(req.url);
        console.log(req.method);
        if (req.method === "GET") {
            //GETのパラメータを取得
            const queryString = req.url.split("?")
            const params = new URLSearchParams(queryString[1]);
            console.log(params);
        }
        res.end(req.url);
    }});

// サーバーが立ち上がる
server.listen(8080);