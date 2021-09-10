'use strict';
const $message = document.querySelector('#message')
const wrapper = document.querySelector('#wrapper')
let shuffled = [];
let colors = ['red', 'orange', 'yellow', 'green', 'white', 'black'];
let colorsConcat = colors.concat(colors);

for(let i = 0; colorsConcat.length > 0; i++){
  const randomIndex = Math.floor((Math.random() * colorsConcat.length))
  shuffled.push(colorsConcat.splice(randomIndex, 1))
  // or
  // const randomIndex = Math.floor(Math.random() * colorsConcat.length)
  // shuffled = shuffled.concat(colorsConcat.splice(randomIndex,1))
}

//카드 만들기
for(let i =0; i<12; i++){
  const card = document.createElement('div')
  card.classList.add('card');
  card.addEventListener('click', turnEvent)
  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');
  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  wrapper.append(card);
  card.append(cardInner);
  cardInner.append(cardFront);
  cardInner.append(cardBack);
  cardBack.style.backgroundColor = shuffled[i]
}

const card = document.querySelectorAll('.card')
let clickable = true;
  card.forEach((card, index) =>{
    clickable = false
    //시작할 때 카드 뒤집기
    setTimeout(() => {
      card.classList.add('flipped');
    }, 1000 + (100*index))

    //시작할 때 뒤집은 카드 다시 뒤집기
    setTimeout(()=>{
      card.classList.remove('flipped')
      clickable = true;
    }, 2500)
  })

let cardSet =[];
let doneCardSet = []

function turnEvent(event){
  if(!clickable||doneCardSet.includes(event.currentTarget)|| cardSet[0] ===this)
  return;
    const selectedCard = event.currentTarget
    event.currentTarget.classList.add('flipped')
    cardSet.push(selectedCard)
    console.log(document.querySelector('.card-back'))

    console.log(cardSet.length)  
    console.log(cardSet,selectedCard)
    
    if(cardSet.length !==2){
      return;
    }
    if(cardSet[0].querySelector('.card-back').style.backgroundColor ===cardSet[1].querySelector('.card-back').style.backgroundColor){
      $message.textContent = `정답입니다!`
      doneCardSet.push(cardSet.splice(0,2))
      doneCardSet = doneCardSet.concat(cardSet)
      cardSet = [];
      console.log(doneCardSet,cardSet)
    }else if(cardSet[0].querySelector('.card-back').style.backgroundColor !==cardSet[1].querySelector('.card-back').style.backgroundColor){
      $message.textContent =`오답입니다!`;
      setTimeout(()=>{
        cardSet.forEach(card => card.classList.remove('flipped'))
        cardSet = []
      }, 1000)
  }
  if(doneCardSet.length === 6){
    $message.textContent = `축하합니다`
    return;
  }
}

// //버그 및 개선사항
// 1. 카드 뒤집기 무한으로 되는거
// 2. 뒤집는 상황에서 뒤집기 > clickable 플래그 함수 만들기
// 3. 오답입니다. 정답입니다. 제대로 안되는 거 해결하기
// 4. 게임이 종료되면 축하 메세지와 게임 새로 시작하기