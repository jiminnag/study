const events = require('events');
const { connect } = require('http2');

//이벤트에 관련 메소드를 사용할 수 있는 EventEmitter 객체선언=>새로운 이벤트를 생성하는 객체
const eventEmitter = new events.EventEmitter();

const connectHandler = function (connected) {
    console.log('1.connected함수 연결 성공!');//1번
    eventEmitter.emit('data_receivde'); //data_receivde 이벤트를 생성
}
//function connected() {console.log('연결 성공!');}

//connection라는 이벤트를 발생해서 함수 호출
//connection 이벤트와 connectHandler 핸들러와 연결
eventEmitter.on('connection', connectHandler);

//data_receive 이벤트와 익명함수와 연결
eventEmitter.on('data_receivde', () => {
    console.log('2.데이터 수신!')//2번
})

//connection라는 이벤트를 발생
eventEmitter.emit('connection'); 