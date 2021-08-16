'use strict!';
const result = document.querySelector('.result');
const $span =	document.querySelector('#bonus')
//1부터 45까지 숫자 담은 array만들기
const number = Array(45).fill().map((element, index) => {
	return index+1;})

const shuffle = []

// 랜덤 숫자 만들기
while(number.length > 0){
	const random = Math.floor(Math.random() * number.length) //0부터 44까지 숫자 랜덤 뽑기
	const spliceArray = number.splice(random, 1) //랜덤 배열 뽑아서
	const spliceNumber = spliceArray[0]  //배열에서 꺼내기
	shuffle.push(spliceNumber); //새로운 배열에 넣기
}
const shuffleSlice = shuffle.slice(0,6)
const bonus = shuffle[6]

const win = shuffleSlice.slice().sort((a, b) => {return a-b})

console.log(win, bonus)


function createNumber(number, target){
	const $ball = document.createElement('div');
	$ball.className = 'random-number';
	$ball.textContent = number;
	target.appendChild($ball);
}

for(let i=0; i<6; i++){
	setTimeout(() =>{createNumber(win[i], result)
	} , (i+1) * 1000)
}

setTimeout(() =>{createNumber(bonus, $span)
} , 7000)



// setTimeout(() =>{createNumber(win[0], result)
// } , 1000)


// setTimeout(() =>{createNumber(win[1], result)
// } , 2000)


// setTimeout(() =>{createNumber(win[2], result)
// } , 3000)


// setTimeout(() =>{createNumber(win[3], result)
// } , 4000)


// setTimeout(() =>{createNumber(win[4], result)
// } , 5000)


// setTimeout(() =>{createNumber(win[5], result)
// } , 6000)



// for(let i =0; i < number.length; i++){
// 	const random = Math.floor(Math.random() * number.length) //0부터 44까지 숫자 랜덤 뽑기
// 	const spliceArray = number.splice(random, 1) //랜덤 배열 뽑아서
// 	const spliceNumber = spliceArray[0]  //배열에서 꺼내기
// 	shuffle.push(spliceNumber); //새로운 배열에 '넣기'
// }
// console.log(shuffle)
// console.log(number)
//for문으로 수정했을 때 오류 조건문에 number.length가 있고, 종료식에
// ++가 있으니 2개씩 움직이게 된다.

// 랜덤 숫자 for문으로 나타내기
// for(let i = number.length; i > 0; i--){
// 	const random = Math.floor(Math.random() * number.length) //0부터 44까지 숫자 랜덤 뽑기
// 	const spliceArray = number.splice(random, 1) //랜덤 배열 뽑아서
// 	const spliceNumber = spliceArray[0]  //배열에서 꺼내기
// 	shuffle.push(spliceNumber); //새로운 배열에 '넣기'
// }
// console.log(shuffle)
