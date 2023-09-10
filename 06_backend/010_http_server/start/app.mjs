//簡易的なサーバーを作る方法
import * as http from "http";

const server = http.createServer(function (req, res){
    console.log(req.url);
    res.end('bye');
});

// サーバーが立ち上がる
server.listen(8080);