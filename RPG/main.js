'strict use';

const $startScreen = document.querySelector('#start-screen')
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterStat = document.querySelector('#monster-stat');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');


const heroStat = {
	name : '',
	level : 1,
	maxhp : 100,
	hp: 100,
	att: 10,
	xp: 0,
};
	
const monster =[{
	name : 'slime',
	hp : 25,
	att: 5,
},{
	name : 'auger',
	hp : 50,
	att: 20,
},{
	name: 'dragon',
	hp: 100,
	att : 30,
}]

$startScreen.addEventListener('submit', (event) =>{
	event.preventDefault();
	const heroName = event.target['name-input'].value
	$startScreen.style.display ='none'
	$gameMenu.style.display = 'block'
	$heroName.textContent = heroName
	heroStat['name'] = heroName
})

$gameMenu.addEventListener('click',(event)=>{
	event.preventDefault()
	if(event.target.textContent ==='모험'){
		console.log('모험')
		$gameMenu.style.display = 'none'
		$battleMenu.style.display = 'block'
		$monsterStat.style.display = 'block'
	}
	if(event.target.textContent ==='휴식'){
		console.log('휴식')
	}
	if(event.target.textContent ==='종료'){
		console.log('종료')
	}
})

$battleMenu.addEventListener('click', (event)=>{
	event.preventDefault();
})