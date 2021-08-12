'use strict';

const start = document.querySelector('.start');
const what = document.querySelector('#what');
const box = document.querySelector('#box')
const gameForm = document.querySelector('#gameForm');

const HIDDEN_STRING = 'hidden'
// 시작부분 시작하기 누르면 뜨는 거
function clickEvent(){
	start.classList.add(HIDDEN_STRING)
	what.classList.remove(HIDDEN_STRING)
	box.classList.replace(HIDDEN_STRING, 'box')
	gameForm.classList.remove(HIDDEN_STRING)
}


start.addEventListener('click', clickEvent)

//숫자 랜덤으로 정하기

const totalNumber =[];
//totalNumber를 1,2,3,4 직접 넣을 수도 있지만 반복문으로 나타내기
for(let i=0; i<9; i++){
	totalNumber.push(i+1)
}

//gameNubmer를 정해야함.
const gameNumber =[];

//랜덤 숫자 뽑기

for(let i=0; i<4; i++){
	const index = Math.floor(Math.random() * totalNumber.length) //0~8까지
	gameNumber.push(totalNumber[index]) //숫자 넣기
	totalNumber.splice(index, 1) //숫자 자르기
	// gameNumber.push(totalNumber.splice(index, 1)) 을 하면 안되는 이유는
  // splice는 배열 통째로 자르기 때문에 [[1], [2], [3], [4]]와 같은 형태가 된다.
	// 토탈넘버에서 숫자 잘라서 gameNumber에 집어넣기 4번 반복
}

function submitEvent(event){
	event.preventDefault() //기본 이벤트 제출 막기
	
}

gameForm.addEventListener('submit', submitEvent)