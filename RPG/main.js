'strict use';

const $startScreen = document.querySelector('#start-screen')
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');




$startScreen.addEventListener('submit', (event) =>{
	event.preventDefault()
	const heroName = event.target['name-input'].value
	$startScreen.style.display ='none'
	$gameMenu.style.display = 'block'
	$heroName.textContent = heroName
})