'use strict';

const box = document.querySelector('.waiting')
const randomSecond = (Math.random()) * 2000
const result = document.querySelector('.result')
const win = document.querySelector('.win');

let startTime;
let endTime;
let id;
const timeDiffZip = [];

function clickEvent(event){
		
	//파란색일 때
	if(event.target.classList.contains('waiting')){
		box.classList.remove('waiting') // 클래스 이름 waiting에서
		box.classList.add('ready') // ready로 바꾸기
		box.textContent = '초록색이 되면 클릭하세요' // text도 바꾸기
		id = setTimeout(() => { // 초록 화면 시작하기
			startTime = new Date(); //시작 시간 저장하기
			box.classList.remove('ready') // 클래스 이름 ready에서
			box.classList.add('now') //now로 바꾸기
			box.textContent = '시작!' // text 바꾸기
		}, randomSecond) // 0~2초 사이 시간

		//빨간색일 때
	}else if(event.target.classList.contains('ready')){
		clearTimeout(id)
		box.classList.remove('ready')
		box.classList.add('waiting')
		box.textContent = '너무 빨랐어요'
		// setTimeout(()=>{
		// 	box.textContent = '클릭해서 시작하세요'
		// 	box.style.backgroundColor = 'blue'
		// },1500)

		//초록색일 때
	}else if(event.target.classList.contains('now')){
		endTime = new Date() 
		const timeDiff = endTime - startTime
		timeDiffZip.push(timeDiff);
		const averageTime = timeDiffZip.reduce((a, c) =>{return (a + c)}) / timeDiffZip.length
		result.textContent = `현재: ${timeDiff}ms 평균: ${averageTime}ms`;
		const wins = timeDiffZip.sort((a,b) => a-b).slice(0,5);
		wins.forEach((top, index) => {
			result.append(
				document.createElement('br'),
				`${index + 1}등 : ${top}ms`
			)
		})
		box.classList.remove('now')
		box.classList.add('waiting')
		box.textContent = '클릭해서 시작하세요'
	}
}
console.log(randomSecond)
box.addEventListener('click', clickEvent)
