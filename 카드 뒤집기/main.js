'use strict'

const $wrapper = document.querySelector('#wrapper')
const colors = ['red', 'orange', 'yellow', 'pink', 'black', 'aqua'];
let copyColors = colors.concat(colors)
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = true


//카드 색깔 섞기
function shuffle(){
  for(let i =0; copyColors.length > 0; i++){
    const randomIndex = Math.floor(Math.random() * copyColors.length)
    const randomArray = copyColors.splice(randomIndex, 1)[0]
    shuffled.push(randomArray)
    
    // shuffled = shuffled.concat(copyColors.splice(randomIndex, 1));
    // shuffled.push(copyColors.splice(randomIndex, 1))
  }
}

//카드 만들기
function createCard(i){
  //div.card > div.card-inner > div.card-front + div.card-back
  const card = document.createElement('div');
  card.className = 'card'; //.card 태그 생성
  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner'; //card-inner 태그 생성
  const cardFront = document.createElement('div');
  cardFront.className = 'card-front'; //card-front 태그 생성
  const cardBack = document.createElement('div'); 
  cardBack.className = 'card-back';
  cardBack.style.backgroundColor = shuffled[i]
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  console.log(cardBack.style.backgroundColor)
  return card;
}

function clickEvent(){
  if(!clickable||clicked.includes(this)||completed.includes(this)){
    return;
  }
  this.classList.add('flipped')
  clicked.push(this)
  if(clicked.length !==2){
    return;
  } //clicked의 길이가 2일때만 발동!
  if(clicked[0].querySelector('.card-back').style.backgroundColor!==clicked[1].querySelector('.card-back').style.backgroundColor){
    // console.logclicked[0]
    clickable = false
    setTimeout(()=>{
      clicked[0].classList.remove('flipped')
      clicked[1].classList.remove('flipped')
      clicked=[];
      clickable = true;
    },500)
  }else if(clicked[0].querySelector('.card-back').style.backgroundColor===clicked[1].querySelector('.card-back').style.backgroundColor){
    completed.push(clicked[0]);
    completed.push(clicked[1]);
    clicked = [];
    if(completed.length ===12){
      checkTime()
      setTimeout(()=>{
        alert('축하!')
        resetGame();
      },4000)
    }
  
  }
}
let startTime;
function startGame(){
  startTime = new Date()
  shuffle()
  for(let i=0; i <12; i++){
    const card = createCard(i)
    card.addEventListener('click', clickEvent)
    $wrapper.appendChild(card)
  }
  
  const card = document.querySelectorAll('.card')
  card.forEach((card,index)=>{
    clickable = false   //클릭 못하게 만들기
    setTimeout(()=>{
      card.classList.add('flipped')
    }, index + (index*100))
    setTimeout(()=>{
      card.classList.remove('flipped')
      clickable = true
  }, 3000)
})
}
startGame()

function resetGame(){
  $wrapper.innerText = '';
  copyColors = colors.concat(colors);
  shuffled = [];
  clicked = [];
  completed = [];
  startGame();
}

function checkTime(){
  const time = document.createElement('div')
  document.body.appendChild(time)
  const endTime = new Date()
  const minutesDiff = (endTime.getMinutes()) - (startTime.getMinutes())
  const secondsDiff = (endTime.getSeconds()) - (startTime.getSeconds())
  time.innerText = `걸린 시간: ${minutesDiff}분 : ${secondsDiff}초`
}

// 12개 카드 만들기
