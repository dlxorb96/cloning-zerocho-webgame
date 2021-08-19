'use strict';

const computer = document.querySelector('#computer');
const result = document.querySelector('#result')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')

const IMG_URL = './rsp.png';
computer.style.background = `url(${IMG_URL})0 0`;
computer.style.backgroundSize = 'auto 200px';

//초마다 이미지의 위치가 바뀌도록 설정하자

const RSPs = {
  scissors : {
    background : `url(${IMG_URL})0 0`,
    backgroundsize: 'auto 200px',
  },
  rock : {
    background : `url(${IMG_URL})-222px 0`,
    backgroundsize: 'auto 200px',
  },
  paper :  {
    background : `url(${IMG_URL})-444px 0`,
    backgroundsize: 'auto 200px',
  },
}
let computerChoice = 'rock'
function changeComputerHand(){
  if(computerChoice ==='rock'){ // 가위일 때
    computerChoice = 'scissors'
    computer.style.background = RSPs.scissors.background;
    computer.style.backgroundSize = RSPs.scissors.backgroundsize;
  }else if(computerChoice === 'scissors'){ // 바위일 때
    computerChoice = 'paper'
    computer.style.background = RSPs.paper.background;
    computer.style.backgroundSize = RSPs.paper.backgroundsize;
  }else if(computerChoice === 'paper'){ //보일 때
    computerChoice = 'rock'
    computer.style.background = RSPs.rock.background;
    computer.style.backgroundSize = RSPs.rock.backgroundsize;
  }
}

let intervalName = setInterval(changeComputerHand, 50);

//여기서 클릭했을 때 멈추는 이벤트를 만든다

//이벤트리스너를 지웠다가 다시 만드는 방법

// function clickEvent(){
//   clearInterval(intervalName) // 클릭했을 때 기존의 inerval을 멈춘다.
//   //1초후에 다시 인터벌을 시작한다.
//   //클릭이벤트를 지웠다가 
//   rock.removeEventListener('click', clickEvent);
//   scissors.removeEventListener('click', clickEvent);
//   paper.removeEventListener('click', clickEvent);
//   //클릭했을 때 버그 발생하는 거 수정하기 
//   setTimeout(() =>{
//     clearInterval(intervalName)
//     //1초후에 다시 만들기
//     rock.addEventListener('click', clickEvent);
//     scissors.addEventListener('click', clickEvent);
//     paper.addEventListener('click', clickEvent);
//     intervalName = setInterval(changeComputerHand, 50);}
//   ,1000)
  
// }

const score = {
  rock : 0,
  scissors: 1,
  paper: 2,
}
let message;
let scoreMessage = 0;
let computerResult = 0;
let userResult = 0;

// 이벤트리스너 대신 if문을 통해서 만드는 방법
let flagF = true;
function clickEvent(event){
  if(flagF){
  clearInterval(intervalName) // 클릭했을 때 기존의 inerval을 멈춘다.
  flagF = false   // 플래그함수를 false로 만들어준다.
  const userChoice = event.target.id === 'rock' ? 'rock': 
  event.target.id === 'scissors' ? 'scissors' : 'paper';
  
  const computerScore = score[computerChoice];
  const userScore = score[userChoice];
  const diff = computerScore -userScore
  console.log(computerChoice, userChoice, diff)
  if([-2, 1].includes(diff)){
    scoreMessage += 1
    message = '승리';
    userResult += 1;
  }else if([2, -1].includes(diff)){
    scoreMessage -= 1;
    message = '패배'
    computerResult += 1;
  }else if([0].includes(diff)){
    message = '무승부'
  }
  if(userResult >=3){
    message = '당신의 승리' // 3점 달성시 나의 승리
    result.textContent = `점수 : ${scoreMessage} ${message}` 
  }else if(computerResult >=3){
    message = '당신의 패배'  // 3점 패배시 나의 패배
    result.textContent = `점수 : ${scoreMessage} ${message}`

  }else{
    //1초후에 다시 인터벌을 시작한다.
    setTimeout(() =>{
      flagF = true
      intervalName = setInterval(changeComputerHand, 50);}
    ,1000)
  }
  result.textContent = `점수 : ${scoreMessage} ${message}`
  console.log(userResult, computerResult)   

  
  }
}


// if()


rock.addEventListener('click', clickEvent);
scissors.addEventListener('click', clickEvent);
paper.addEventListener('click', clickEvent);


//클릭했을 때 버그 발생하는 거 수정하기 
