const http = require('http');

//node 기본 주소
const hostname = '127.0.0.1' //서버주소
const port = 3000; //서버안에 있는 프로그램 이름

const server = http.createServer((req, res) => { //res는 요청하는부분
    res.statusCode = 200; //정상적으로 처리
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('서버실행,,, http://${hostname}:${prot}/')
})

