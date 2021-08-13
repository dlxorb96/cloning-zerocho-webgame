'use strict';

const start = document.querySelector('.start');
const what = document.querySelector('#what');
const box = document.querySelector('#box')
const gameForm = document.querySelector('#gameForm');
const $input = document.querySelector('#gameInput');
const result = document.querySelector('.result')

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

const answer = gameNumber.join('') // 배열이었던 랜덤 숫자를 문자열로 바꿈

const tries = [];  //시도하는 거 저장

//숫자 4자리수, 겹치는가 판단하기
//서밋이벤트에서 inputNumber를 받아와서 인자로 받는다.
function checkNumber(value){
  // inputNumber의 길이가 4인가?
  if(value.length !== 4){
    return alert("4자리 숫자를 입력해주세요.");}
  // 중복된 숫자가 있는가?
  if(new Set(value).size !==4){
    return alert("중복 없이 입력해주세요");
  }
  // 이미 시도한 값인가?
  if(tries.includes(value)){
    return alert("이미 시도한 값입니다.");
  }
  // 정상적인 입력일 시
  return true;
  } 

// 숫자 제출하기

function submitEvent(event){
	event.preventDefault() //기본 이벤트 제출 막기
	const inputNumber = $input.value // 적는창 밸류 저장하기
	$input.value = ''  // 인풋창 다시 비우기
	if(checkNumber(inputNumber)){
    //입력값 문제 없음
    if(inputNumber === answer){
      result.innerHTML = '1볼 1스트라이크'+'<br/>'+' HomeRun!'
      return;
    }
    if(tries.length >= 9){
      const message = document.createTextNode(`패배! 정답은${answer}`)
      result.appendChild(message)
    }


    tries.push(inputNumber);
  }}

gameForm.addEventListener('submit', submitEvent)