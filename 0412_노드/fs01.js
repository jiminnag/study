const fs = require('fs');

fs.readFile('text1.txt', 'utf-8', (err, data) => { //비동기식으로 파일읽기
    if (err) { //예외 처리
        console.log(err);
    } else {
        console.log(`비동기식으로 읽음: ${data}`)
    }
});;


const text = fs.readFileSync('text1.txt', 'utf-8'); //동기식으로 파일읽기
console.log(`동기식으로 읽음: ${text}`);