//簡易的なサーバーを作る方法
import * as http from "http";

const server = http.createServer(function (req, res){
    console.log(req.url);

    if (req.url === '/hello') {
        res.end('<script>console.log("frontend")</script>');
    } else if (req.url === '/bye') {
        res.end('bye');
    }
});

// サーバーが立ち上がる
server.listen(8080);