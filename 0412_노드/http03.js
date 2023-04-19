const http = require('http');
const fs = require('fs');

//이미지서버
http.createServer((req, res) => {
    fs.readFile('node.png', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'image/png' });
            res.end(data);
        } else {
            console.log(err)
        }
    })
}).listen(3000, () => {
    console.log('이미지서버 실행중..');
})

//사운드서버
http.createServer((req, res) => {
    fs.readFile('sunny.mp3', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'audio/mp3' });
            res.end(data);
        } else {
            console.log(err)
        }
    })
}).listen(3001, () => {
    console.log('사운드서버 실행중...');
})