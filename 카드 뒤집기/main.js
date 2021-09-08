'use strict';

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
  card.style.backgroundColor = shuffled[i]
}

const card = document.querySelectorAll('.card')

card.forEach((card, index) =>{
  setTimeout(() => {
    card.classList.add('flipped');
  }, 1000 + (100*index))
  setTimeout(()=>{
    card.classList.remove('flipped')
  }, 5000)
})

let cardSet =[];
let doneCardSet = []
function turnEvent(event){
  const selectCard = event.currentTarget
  cardSet.push(selectCard)
  console.log(cardSet)
  event.currentTarget.classList.add('flipped')
  
}



if(cardSet.length === 2){
  console.log(cardSet.length)

  // 뒤집은 카드의 색이 같은 경우
  if(cardSet[0].style.backgroundColor ===cardSet[1].style.backgroundColor){
    cardSet.splice(0,2).push(doneCardSet);
  }else if(cardSet[0].style.backgroundColor !==cardSet[1].style.backgroundColor){
    cardSet.forEach(card=>{card.classList.remove('flipped')})
  }

}
// setTimeout(()=>{

// }, 2000)
// if(firstCard ===secondcard){
//   firstCard.style.classList.add('flipped');
//   secondcard.style.classList.add('flipped');
// }else if( firstCard !== secondcard){
//   setTimeout( () => {
//     firstCard.style.classList.remove('flipped')
//     secondcard.style.classList.remove('flipped')
//   }, 2000)
// }