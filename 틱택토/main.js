'use strict';



const $table = document.createElement('table')

// for(let i =0; i<3; i++){
//   const $tr = document.createElement('tr')
// 	for(let i =0; i<3; i++){
// 		const $td = document.createElement('td')
// 		$tr.append($td);
// 	}
// 	$table.append($tr);
// }

document.body.append($table)

const arr = [1, 2, 3, 4, 5]
const [one, two, three, four, five] = arr;

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
document.body.append($table)
