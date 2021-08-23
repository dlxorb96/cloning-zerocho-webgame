'use strict';



const $table = document.createElement('table')
const { body } = document

let turn = 'X'

function checkFunc(event){
  if(event.target.textContent === ''){
  event.target.textContent = turn
  turn = turn === 'X' ? 'O' : 'X'
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