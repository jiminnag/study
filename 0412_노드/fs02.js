const fs = require('fs');
const data = "Hello Node.js!!";

fs.writeFile('text2.txt', data, 'utf-8', (err) => { //비동기식 파일쓰기
    if (err) {
        console.log('에러 발생!')
    } else {
        console.log('저장완료 / 비동기 ');
    }
})

fs.writeFileSync('text3.txt', data, 'utf-8'); //동기식으로 파일쓰기
console.log('저장완료 / 동기');