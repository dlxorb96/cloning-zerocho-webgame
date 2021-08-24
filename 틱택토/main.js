'use strict';



const $table = document.createElement('table')
const { body } = document
const result = document.createElement('div')
let turn = 'X'

function checkWinner(target){
  let rowIndex;
  let cellIndex;
  rows.forEach((row, ri) =>{
    row.forEach((cell , ci) => {
      if(cell === target){
        rowIndex = ri;
        cellIndex = ci;
        console.log(ri, ci)
      }
    })
  })
  let winner = false
  if(rows[rowIndex][0].textContent === turn&&
  rows[rowIndex][1].textContent === turn&&
  rows[rowIndex][2].textContent === turn){
    console.log('1')
    winner = true
  }
  return winner;
  // console.log(rows[rowIndex][cellIndex])
  console.log(rows[0][cellIndex],rows[1][cellIndex],rows[2][cellIndex])
}

function checkFunc(event){
  if(event.target.textContent === ''){
  event.target.textContent = turn
  turn = turn === 'X' ? 'O' : 'X'
  if(checkWinner(event.target)){
    result.textContent = 누구의승리
  }
  }
  //   if(turn === 'O'){
  //     event.target.textContent = 'O'
  //     turn = 'X'
  //   }else if(turn ==='X'){
  //     event.target.textContent = 'X'
  //     turn = 'O'
  //   }
  // }  
}

const rows = []

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
body.append($table)

$table.addEventListener('click', checkFunc)