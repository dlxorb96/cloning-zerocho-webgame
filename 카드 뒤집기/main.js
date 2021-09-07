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


function turnEvent(event){
  const firstclick = event.currentTarget
  event.currentTarget.classList.add('flipped')
  console.log(event.currentTarget.style.backgroundColor)
}

// wrapper.addEventListener('click', turnEvent)