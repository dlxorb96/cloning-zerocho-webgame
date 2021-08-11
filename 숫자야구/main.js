'use strict';

const start = document.querySelector('.start');
const what = document.querySelector('#what');
const box = document.querySelector('#box')
const gameInput = document.querySelector('#gameInput');

const HIDDEN_STRING = 'hidden'

function clickEvent(){
	start.classList.add(HIDDEN_STRING)
	what.classList.remove(HIDDEN_STRING)
	box.classList.replace(HIDDEN_STRING, 'box')
	gameInput.classList.remove(HIDDEN_STRING)
}

// let number = Math.floor(Math.random() * 10000)

start.addEventListener('click', clickEvent)

// let number1 = [];
// let i = 0
// while(i < 9){
// 	i++
// 	number1.push(i);
// }

// console.log(number1)


// let number2 =[];
// for(let j = 0; j<9; j+=1){
// 	number2.push(j+1);
// }
// console.log(number2)

let number = [];
let i =0
while(i <9){
number.push(i)
i++
}
console.log(number)