'use strict';

const $table = document.createElement('table')
const { body } = document
const result = document.createElement('div')
const rows = []

let turn = 'O'

function checkWinner(target){
  //이중 반복문으로 뽑아왔던 rowIndex, cellIndex를 쉽게 표현하기
  const cellIndex = target.cellIndex
  const rowIndex = target.parentNode.rowIndex


  let winner = false

  //가로줄 판단하기
  if(rows[rowIndex][0].textContent === turn&&
  rows[rowIndex][1].textContent === turn&&
  rows[rowIndex][2].textContent === turn){
    winner = true
  }
  //세로줄 판단하기
  if(rows[0][cellIndex].textContent ===turn&&
    rows[1][cellIndex].textContent ===turn&&
    rows[2][cellIndex].textContent ===turn){
      winner = true
    }
  //대각선 판단하기
  if(rows[0][0].textContent ===turn&&
    rows[1][1].textContent ===turn&&
    rows[2][2].textContent ===turn){
      winner = true
    }
  //대각선 판단하기
  if(rows[0][2].textContent ===turn&&
  rows[1][1].textContent ===turn&&
  rows[2][0].textContent ===turn){
    winner = true
  }
  return winner;
}

function winAndDraw(target){
  //승리판단하기
  if(checkWinner(target)){
    result.textContent = `${turn}의 승리`
    //게임 끝난 후에도 클릭되는 버그 고치기
    $table.removeEventListener('click', checkFunc)
    console.log(target)
    return;
  }

  //무승부 만들기 1번 방법
  const draw = rows.flat().every((cell) => cell.textContent)
  if(draw){
    result.textContent = '무승부'
    return;
  }
  turn = turn === 'X' ? 'O' : 'X'

}

let clickable = true
function checkFunc(event){
  if(!clickable){
    return;
  }
  //빈칸인 경우에만 가능하게 만들기
  if(event.target.textContent === ''){
    event.target.textContent = turn
    winAndDraw(event.target)

    //컴퓨터 차례 만들기
    clickable = false
    setTimeout(() => {
      if(turn ==='X'){
        const computerFilter = rows.flat().filter((t)=> !t.textContent)
        const computerTurn = computerFilter[Math.floor(Math.random() * (computerFilter.length-1))]
        computerTurn.textContent = turn;
        winAndDraw(computerTurn)
        clickable = true
      }
    }, 1500)
  
  }
}

for(let i = 0; i<3; i++){
	const $tr = document.createElement('tr');
	const cells = []
	for (let j=0; j < 3; j++){
		const $td = document.createElement('td');
		cells.push($td);
		$tr.append($td);
	}
	rows.push(cells)
	$table.append($tr)
}
$table.addEventListener('click', checkFunc)

body.append($table)
body.append(result)
