'use strict'

const $startScreen = document.querySelector('#start-screen')
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroStat = document.querySelector('#hero-stat');
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
const $monsterImg = document.querySelector('#monster-img');

class Game{
	constructor(name){
		this.monster = null;
		this.hero = null;
		this.monsterList = [
			{ name: '슬라임', hp : 25, att: 10, xp: 10},
			{ name: '스켈레톤', hp : 50, att: 15, xp: 20},
			{ name: '마왕', hp : 150, hp : 150, att: 35, xp: 50},
		];
		this.start(name);
	}
	start(name){
		$gameMenu.addEventListener('click', this.onGameMenuClick);
		$battleMenu.addEventListener('click',this.onBattleMenuClick);
		this.changeScreen('game');
		this.hero = new Hero(this, name);
		this.updateHeroStat();
		$message.style.display = 'none'
	}
	changeScreen(screen){
		if(screen === 'start'){
			$startScreen.style.display = 'block';
			$gameMenu.style.display = 'none';
			$battleMenu.style.dislpay = 'none';
		}else if(screen ==='game'){
			$startScreen.style.display = 'none';
			$gameMenu.style.display = 'block';
			$battleMenu.style.display = 'none';
		}else if(screen ==='battle'){
			$startScreen.style.display = 'none';
			$gameMenu.style.display = 'none';
			$battleMenu.style.display = 'block';
      $monsterStat.style.display = 'block';
      $monsterImg.style.display = 'block';
		}
	}
	onGameMenuClick = (event) => {
		event.preventDefault()
		const click = event.target.textContent;
		if(click === '모험'){
			this.changeScreen('battle');
			const monsterName = this.monsterList[Math.floor(Math.random() * this.monsterList.length)]
      this.monster = new Monster(
        this, 
        monsterName.name, 
        monsterName.hp, 
        monsterName.att, 
        monsterName.xp
        );
      this.updateMonster();
			$message.style.display ='none'
		}
		else if(click === '휴식'){
			const {hero} = this
			$message.style.display = 'block'
			$message.innerText = `체력이 모두 회복되었다.`
			hero.hp = hero.maxHp
			this.updateHeroStat()
		}
		else if(click === '종료'){}
	}
	onBattleMenuClick = (event) =>{
		event.preventDefault()
		const click = event.target.textContent;
		$message.style.display = 'block'

		if(click === '공격'){
			const {monster, hero} = this
			hero.attack(monster)
			monster.attack(hero)
			$heroHp.textContent = `HP: ${hero.hp} / ${hero.maxHp}`;
			$message.innerText = `${hero.att}의 피해를 주고 ${monster.att}의 피해를 입었다.`
			if(monster.hp <= 0){
				$message.textContent = `${monster.name}을 잡아 경험치 ${monster.xp}를 얻었다.`
        this.getXp()
				this.updateHeroStat()
        this.quit()
			}else if(monster.hp > 0){
				$monsterHp.textContent = `hp : ${monster.hp} / ${monster.maxHp}`
			}
			if(hero.hp <= 0){
				this.becomeZeroHp()
			}
		}
		else if(click === '회복'){
    	const {hero, monster} = this
			hero.heal(monster)
    	this.updateHeroStat()
    	this.updateMonster()
			$message.innerText = `20의 체력을 회복하고 ${monster.att}의 피해를 입었다.`
			if(hero.hp <= 0){
				this.becomeZeroHp()
			}
		}
		else if(click === '도망'){
			this.quit()
			$message.innerText = `도망쳤다.`
		}
	}
	updateHeroStat() {
		const { hero } = this;
		if(hero === null){
			$heroName.textContent = '';
			$heroLevel.textContent = '';
			$heroHp.textContent = '';
			$heroXp.textContent = '';
			$heroAtt.textContent = '';
			return;
		}
		$heroName.textContent = hero.name;
		$heroLevel.textContent = `${hero.lev}Lev`;
		$heroHp.textContent = `HP: ${hero.hp} / ${hero.maxHp}`;
		$heroXp.textContent = `XP: ${hero.xp} / ${15 * hero.lev}`;
		$heroAtt.textContent = `ATT : ${hero.att}`;	
	}
  updateMonster(){
    const { monster } = this;
    if(monster === null){
      $monsterName.textContent = '';
      $monsterHp.textContent = '';
      $monsterAtt.textContent = '';
      return;
    }
    
    $monsterName.textContent = monster.name
		$monsterHp.textContent = `hp : ${monster.hp} / ${monster.maxHp}`
		$monsterAtt.textContent = `att : ${monster.att}`
  }
	getXp(){
		const {monster ,hero} = this
		hero.xp += monster.xp
		if(hero.xp >= (15 * hero.lev)){ // 레벨업
			hero.xp -= 15 * hero.lev
			this.levUp()
			if(hero.xp >= (15 * hero.lev)){
				hero.xp -= 15 * hero.lev
			this.levUp()
			}
			
		}
	}
	levUp(){
		const { hero, monster } = this
		hero.lev += 1
		// $message.append(document.createElement('br'), `level ${hero.lev}이 되었다!` )
		// $message.innerText += '\n' + `level ${hero.lev}이 되었다!`
		$message.innerText += `
		level ${hero.lev}이 되었다!`
    hero.att += 5;
    hero.maxHp += 5;
    hero.hp = hero.maxHp
  }
  quit(){
    this.monster = null;
    $monsterStat.style.display = 'none'
		$monsterImg.style.display = 'none'
    this.changeScreen('game');
  }
	becomeZeroHp(){
		this.hero = null;
		$battleMenu.style.display = 'none'
		this.monster = null;
		$monsterImg.style.display = 'none'
		this.updateHeroStat()
		this.updateMonster()
		$gameMenu.removeEventListener('click', this.onGameMenuClick);
		$battleMenu.removeEventListener('click', this.onBattleMenuClick);
		this.changeScreen('start')
		$message.style.display = 'block'
		$message.innerText =`죽었습니다. 새로운 영웅을 생성하세요`
		game = null;
		console.log(this.game)
	}
}

class Unit {
	constructor(game,name,hp,att,xp){
		this.game = game;
		this.name = name;
		this.maxHp = hp;
		this.hp = hp;
		this.xp = xp;
		this.att  = att;
	}
	attack(target){
		target.hp -= this.att;
	}
}

class Hero extends Unit{
	constructor(game, name){
		super(game,name,100,10,0);
		this.lev = 1
	}
	// attack(target){
	// 	super.attack(target)
	// }
	heal(monster){
		
		if(this.hp >= this.maxHp){
			$message.style.display = 'block';
			$message.innerText = `이미 최대 체력입니다.`
			
		}else {
			this.hp += 20;
		this.hp -= monster.att;
		}
		
	}
}

class Monster extends Unit{
	constructor(game, name, hp, att, xp){
		super(game,name,hp,att,xp)
	}
}

let game = null;

$startScreen.addEventListener('submit', (event) =>{
	event.preventDefault();
	const name = event.target['name-input'].value;
	game = new Game(name);
})


//3. 죽었을 때 기능
//4. 종료 기능