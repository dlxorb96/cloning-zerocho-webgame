
const result = document.querySelector('#result')
const printOperator = document.querySelector('#print-operator')
let firstNumber ='';
let secondNumber ='';
let operator='';


// const onclickNumber = (number) => () => {
//         if(!operator){
//             firstNumber += number
//         }
//         else{
//             secondNumber += number
//         }
//         result.value += number;}
    


// function onclickNumber(number){
    
    
//     return () =>{if(!operator)
//         {firstNumber += number}
//     else
//         {secondNumber+= number};
//     result.value += number;};
// }



const onclickNumber = (event) =>
        
    {if(!operator)
        {firstNumber += event.target.textContent}
    else
        {if(secondNumber){
            result.value = '';
        }
        secondNumber+= event.target.textContent};
        result.value += event.target.textContent;}
    
const onclickOperator = (op) => () => 
    {if(firstNumber){
        operator = op
        printOperator.value = op
        // result.value = ''
    }
    else{
        alert('error!');}
    }

document.querySelector('#number1').addEventListener('click', onclickNumber)
document.querySelector('#number2').addEventListener('click', onclickNumber)
document.querySelector('#number3').addEventListener('click', onclickNumber)
document.querySelector('#number4').addEventListener('click', onclickNumber)
document.querySelector('#number5').addEventListener('click', onclickNumber)
document.querySelector('#number6').addEventListener('click', onclickNumber)
document.querySelector('#number7').addEventListener('click', onclickNumber)
document.querySelector('#number8').addEventListener('click', onclickNumber)
document.querySelector('#number9').addEventListener('click', onclickNumber)
document.querySelector('#number0').addEventListener('click', onclickNumber)

document.querySelector('#plus').addEventListener('click', onclickOperator('+'))
document.querySelector('#minus').addEventListener('click',onclickOperator('-'))
document.querySelector('#multiply').addEventListener('click', onclickOperator('*'))
document.querySelector('#divide').addEventListener('click', onclickOperator('/'))
document.querySelector('#clear').addEventListener('click', () => 
{result.value = '';
printOperator.value = '';
firstNumber ='';
secondNumber = ''
operator = ''})
document.querySelector('#value').addEventListener('click', () => 
{
    const first = firstNumber;
    const second = secondNumber;
})


// // 9. Ternary operator : ?
// // if를 간단하게 쓸 수 있는
// // condition ? value1 : value2;
// console.log(name ==='ellie' ? 'yes' : 'no')
// // 값이 true면 앞에 꺼 false면 뒤
// // 가독성을 위해 if나 스위치를 쓰는게 맞다
// // 간단할때만 쓰는게 좋다.

// (!operator ? firstNumber += event.target.textContent : 

// const onclickNumber = (event) =>
        
//     {if(!operator)
//         {firstNumber += event.target.textContent}
//     else
//         {secondNumber+= event.target.textContent};
//     result.value += event.target.textContent;}
    
// const onclickOperator = (op) => () => 
//     {if(firstNumber){
//         operator = op
//         printOperator.value = op
//         result.value = ''
//     }
//     else{
//         alert('error!');}
//     }

function test() {
    let result ='';
    if(!a){
        result = 'a';
        result +='b';
        return result;
        
    }   
    if(!b){
        result = 'c';
        result +='b';
        return result;
    }
    }