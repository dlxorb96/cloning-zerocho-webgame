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
const $monsterImg = document.querySelector('#monster-img')
class Game{
	
}

class Hero{
	constructor(name, level, maxhp, hp, att, xp){
		this.name = name;
		this.level = level;
		this.maxphp = maxhp;
		this.hp = hp;
		this.att = att;
		this.xp = xp;
	}
}

const heroStat = {
	name : '',
	level : 1,
	maxhp : 100,
	hp: 100,
	att: 10,
	xp: 0,
	attack (monster){
		monster.hp -= this.att
		this.hp -= monster.att
		},
	heal (monster){
		this.hp += 20
		this.hp -= monster.att
	}
};
	
let monster = null
const monsterList =[
	{name : '슬라임', hp : 25, att: 5,},
	{name : '오우거', hp : 50,	att: 20,},
	{name: '드래곤', hp: 100,	att : 30,},
]

$startScreen.addEventListener('submit', (event) =>{
	event.preventDefault();
	const heroName = event.target['name-input'].value
	$startScreen.style.display ='none'
	$gameMenu.style.display = 'block'
	$heroName.textContent = heroName  
	heroStat['name'] = heroName
	hero1 = JSON.parse(JSON.stringify(heroStat))
	$heroLevel.textContent = `level : ${hero1.level}`
	$heroHp.textContent = `hp : ${hero1.hp} / ${hero1.maxhp}`
	$heroAtt.textContent = `Att : ${hero1.att}`
	$heroXp.textContent = `XP : ${hero1.xp}`
})

$gameMenu.addEventListener('click',(event)=>{
	event.preventDefault()
	if(event.target.textContent ==='모험'){
		console.log('모험')
		$gameMenu.style.display = 'none'
		$battleMenu.style.display = 'block'
		$monsterStat.style.display = 'block'
		$monsterImg.style.display = 'block';
		const monster1 = JSON.parse(JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)]))
		console.log(monster1)
		$monsterName.textContent = monster1.name
		$monsterHp.textContent = `hp : ${monster1.hp}`
		$monsterAtt.textContent = `att : ${monster1.att}`
		$battleMenu.addEventListener('click',(event)=>{
			if(event.target.textContent ==='공격'){
				heroStat.attack(monster1)
			}else if(event.target.textContent ==='회복'){

			}else if (event.target.textContent ==='도망'){

			}

		})
	}
	else if(event.target.textContent ==='휴식'){
		console.log('휴식')
	}
	else if(event.target.textContent ==='종료'){
		console.log('종료')
	}
})

$battleMenu.addEventListener('click', (event)=>{
	event.preventDefault();
})