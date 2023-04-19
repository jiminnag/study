const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        } else {
            console.log(err)
        }
    })
}).listen(3000, () => {
    console.log('서버 실행중...');
})