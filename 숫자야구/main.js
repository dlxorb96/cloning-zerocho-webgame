'use strict';

const start = document.querySelector('.start');
const what = document.querySelector('#what');
const box = document.querySelector('#box')
const gameForm = document.querySelector('#gameForm');
const $input = document.querySelector('#gameInput');
const result = document.querySelector('.result');

const opportunity1 = document.querySelector('#box div:nth-child(1)')
const opportunity2 = document.querySelector('#box div:nth-child(2)')
const opportunity3 = document.querySelector('#box div:nth-child(3)')
const opportunity4 = document.querySelector('#box div:nth-child(4)')
const opportunity5 = document.querySelector('#box div:nth-child(5)')
const opportunity6 = document.querySelector('#box div:nth-child(6)')
const opportunity7 = document.querySelector('#box div:nth-child(7)')
const opportunity8 = document.querySelector('#box div:nth-child(8)')
const opportunity9 = document.querySelector('#box div:nth-child(9)')
const opportunity10 = document.querySelector('#box div:nth-child(10)')

const HIDDEN_STRING = 'hidden';

// 시작부분 시작하기 누르면 뜨는 거
function clickEvent() {
  start.classList.add(HIDDEN_STRING)
  what.classList.remove(HIDDEN_STRING)
  box.classList.replace(HIDDEN_STRING, 'box')
  gameForm.classList.remove(HIDDEN_STRING)
}


start.addEventListener('click', clickEvent)

//숫자 랜덤으로 정하기

const totalNumber = [];
//totalNumber를 1,2,3,4 직접 넣을 수도 있지만 반복문으로 나타내기
for (let i = 0; i < 9; i++) {
  totalNumber.push(i + 1)
}

//gameNubmer를 정해야함.
const gameNumber = [];

//랜덤 숫자 뽑기

for (let i = 0; i < 4; i++) {
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
function checkNumber(value) {
  // inputNumber의 길이가 4인가?
  if (value.length !== 4) {
    return alert("4자리 숫자를 입력해주세요.");
  }
  // 중복된 숫자가 있는가?
  if (new Set(value).size !== 4) {
    return alert("중복 없이 입력해주세요");
  }
  // 이미 시도한 값인가?
  if (tries.includes(value)) {
    return alert("이미 시도한 값입니다.");
  }
  // 정상적인 입력일 시
  return true;
}


let out = 0; //out 개수
let opportunity = 0; //기회 개수

// 숫자 제출하기

function submitEvent(event) {
  event.preventDefault() //기본 이벤트 제출 막기
  const inputNumber = $input.value // 적는창 밸류 저장하기
  $input.value = ''  // 인풋창 다시 비우기
  if (!checkNumber(inputNumber)) {
    return;
  }
  //기회 색칠하기
  opportunity++  
  switch(opportunity){
    case 10: opportunity10.style.background = 'red';
    case 9: opportunity9.style.background = 'red';
    case 8: opportunity8.style.background = 'red';
    case 7: opportunity7.style.background = 'red';
    case 6: opportunity6.style.background = 'red';
    case 5: opportunity5.style.background = 'red';
    case 4: opportunity4.style.background = 'red';
    case 3: opportunity3.style.background = 'red';
    case 2: opportunity2.style.background = 'red';
    case 1: opportunity1.style.background = 'red';
  }
  // 맞출시
  if (inputNumber === answer) {
    result.innerHTML = '<br/>' + ' HomeRun!'
    return;
  }
  //졌을시
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은${answer}`)
    result.appendChild(message)
    return;
  }
  let strike = 0;
  let ball = 0;
  for(let i=0; i < gameNumber.length; i++){
    const index = inputNumber.indexOf(gameNumber[i])
    //일치하는 숫자를 찾았을 때
    if(index > -1){
      (index === i) ? strike +=1 : ball += 1
      // 자리가 같으면 스트라이크 다르면 볼
    }
  }

  // 0스트라이크 0볼일 시
  if(strike === 0 && ball === 0){
    out++;
    result.append(`${inputNumber}: ${out}아웃!`, document.createElement('br'));
  }else{
    result.append(`${inputNumber}: ${strike}스트라이크 ${ball}볼`, document.createElement('br'))
  }
  
  if(out === 3){
    const message = document.createTextNode(`패배! 정답은${answer}`)
    result.appendChild(message)
    return;
  }
  tries.push(inputNumber); //입력값을 tries에 집어넣는다.
}

gameForm.addEventListener('submit', submitEvent)

