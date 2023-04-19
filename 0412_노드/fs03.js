const fs = require('fs');

fs.readFile('text1.txt', 'utf-8', (err, data) => { //파일명이 잘못되면 에러발생이 뜸
    if (err) {
        console.log('에러발생! / 비동기');
    } else {
        console.log(data);
    }
});

try { //동기씩으 if문을 사용 못하고 try를 사용해야함
    const text = fs.readFileSync('text1.txt', 'utf-8'); //동기
    console.log(`동기식으로 읽음 : ${text}`);
} catch (e) {
    console.log('에러발생! / 동기');
}