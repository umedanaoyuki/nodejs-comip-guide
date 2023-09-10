import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

// JSON.stringify({message: 'hello', number: 1, array: ['banana','orange', 1]})
app.get('/', function(req, res) {
    //必ずJsonで渡したい場合の書き方
    res.json({message: 'hello', number: 1, array: ['banana','orange', 1]});
})

app.listen(PORT, function() {
    console.log(`Server start: http://localhost:${PORT}`)
});
