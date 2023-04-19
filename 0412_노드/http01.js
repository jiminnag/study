const http = require('http');

http.createServer((req, res) => {
    //res.statusCode, res. setHeader() 합쳐서 선언;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>http모듈테스트</title></head><body style="background-color: deepskyblue;"><h2>http 모듈 테스트</h2><p>처음으로 실행하는 node.js http 서버</p></body></html>');
}

).listen(3000, () => {
    console.log('서버 실행중...')
})

//127.0.0.1:3000