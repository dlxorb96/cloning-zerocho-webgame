
const result = document.querySelector('#result')
const printOperator = document.querySelector('#print-operator')
let firstNumber ='';
let secondNumber ='';
let operator='';


// const onclickNumber = (number) => {if(!operator)
//     {firstNumber +=number}
// else
//     {secondNumber+=number};
// result.value += number}

function onclickNumber(number){
    if(!operator)
        {firstNumber += number}
    else
        {secondNumber+= number};
    result.value += number
    () =>{};
}

document.querySelector('#number1').addEventListener('click',onclickNumber('1'))
document.querySelector('#number2').addEventListener('click', onclickNumber('2'))
document.querySelector('#number3').addEventListener('click', onclickNumber('3'))
document.querySelector('#number4').addEventListener('click', onclickNumber('4'))
document.querySelector('#number5').addEventListener('click', onclickNumber('5'))
document.querySelector('#number6').addEventListener('click', onclickNumber('6'))
document.querySelector('#number7').addEventListener('click', onclickNumber('7'))
document.querySelector('#number8').addEventListener('click', onclickNumber('8'))
document.querySelector('#number9').addEventListener('click', onclickNumber('9'))
document.querySelector('#number0').addEventListener('click', onclickNumber('0'))

document.querySelector('#plus').addEventListener('click', () => 
{if(!secondNumber)
    {operator = '+';
    printOperator.value = '+';
    result.value = '';
    }
else
    {alert('error!');}})
document.querySelector('#minus').addEventListener('click', () =>
{if(!secondNumber)
    {operator = '-';
    printOperator.value = '-';
    result.value = '';
    }
else
    {alert('error!');}})
document.querySelector('#multiply').addEventListener('click', () => 
{if(!secondNumber)
    {operator = '*';
    printOperator.value = '*';
    result.value = '';
    }
else
    {alert('error!');}})
document.querySelector('#divide').addEventListener('click', () => 
{if(!secondNumber)
    {operator = '/';
    printOperator.value = '/';
    result.value = '';
    }
else
    {alert('error!');}})
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
    // result.value = `${Number(/firstNumber) operator Number(secondNumber)}`;
})// 버튼 가져오기


// 배열화 해서 한번에 클릭이벤트로 만들기


// 클릭이벤트, 함수를 만들어야하는데 


// 함수 1. operator가 비어있다. firstNumber에 저장
// operator가 차있다. secondNumber에 저장

// 함수 2. operator에 저장


// Array.join() > 배열을 합쳐줌

function A(){
    console.log('1')
}

const B = (() => {console.log('hello'); console.log('B')})

const C = ['1','2','3']

C.forEach(B)
