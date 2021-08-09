
const result = document.querySelector('#result')
const printOperator = document.querySelector('#print-operator')
let firstNumber ='';
let secondNumber ='';
let operator='';

//  고차함수 만들기
// const onclickNumber = (number) => () => {
//         if(!operator){
//             firstNumber += number
//         }
//         else{
//             secondNumber += number
//         }
//         result.value += number;}
    

// 고차함수 중괄호, return 생략 전
// function onclickNumber(number){
    
    
//     return () =>{if(!operator)
//         {firstNumber += number}
//     else
//         {secondNumber+= number};
//     result.value += number;};
// }

const onclickNumber = (event) =>{
        
    if(!operator) { //operator가 없을 때
        firstNumber += event.target.textContent; // 입력하는 건 퍼넘이 된다 
        result.value += event.target.textContent;// 
        return}
        
    // operator가 있을때 
    if(!secondNumber){ // second넘버가 없을 때
        result.value = ''; // 인풋창을 비운다.
    }
    secondNumber+= event.target.textContent;//세컨드넘버에 입력된다.
    result.value += event.target.textContent;}; // 누르는 걸 인풋에 입력한다.
         

// const onclickOperator = (op) => () => 
//     {if(firstNumber){
//         operator = op
//         printOperator.value = op
//     }
//     else{
//         alert('error!');}
//     }

//  버그 수정 전 2가지 숫자만 할 수 있음 두번째 숫자를 할당하고 나서
// 연산자를 눌러도 secondNumber 뒤에 string으로 더해짐. 
// 이를 해결 하기위해 2가지 방법으로 2가지 해결을 했음.
// 1. 두번째 숫자이후 추가 연산을 할 경우 에러를 발생시켰음.
// 2. 두 수를 연산한 값을 firstNumber로 할당시키고 추가연산이
// 가능하게 만들었음.


//  1번 해결 방안
// const onclickOperator = (op) => () => 
//     {if(firstNumber&&!secondNumber){
//         operator = op
//         printOperator.value = op
//     }
//     else{
//         alert('error!');}
//     }

// 2번 해결 방안
const onclickOperator = (op) => () => {
    // 마이너스 숫자 만들기 
    // 1. firstNumber로 들어오는 경우
    if(op ==='-' && !firstNumber){
        result.value = ''
        result.value += '-'
        firstNumber += '-'
        return;
    }
    // 2. secondNumber로 들어오는 경우
    if(op ==='-'&& operator ==='-' && !secondNumber){
        result.value = ''
        result.value += '-'
        secondNumber += '-'
        return;
    }
    
    if(result.value === '-'){
        alert('Please Press Number')
        return;
    }
    if(firstNumber&&!secondNumber){
    operator = op
    printOperator.value = op
    }
    else if(secondNumber){
        switch (operator){
            case '+':
                result.value = parseInt(firstNumber) + parseInt(secondNumber);
                firstNumber = result.value
                secondNumber = ''
                break;
            
            case '-':
                result.value = parseInt(firstNumber) -parseInt(secondNumber);
                firstNumber = result.value
                secondNumber = ''
                break;
            case '*' :
                result.value = parseInt(firstNumber) * parseInt(secondNumber);
                firstNumber = result.value
                secondNumber = ''
                break;
            case '/' :
                result.value = parseInt(firstNumber) / parseInt(secondNumber);
                firstNumber = result.value
                secondNumber = ''
                break;
            default: 
                break;
        }
        printOperator.value = op
        operator = op

    }
    else{
        alert('Please Press Number!')
    }
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
{   // 1번째 방법 if문을 사용하기
    // if(secondNumber){
    //     if(operator === '+'){
    //         result.value = parseInt(firstNumber) + parseInt(secondNumber)
            
    //     }
    //     else if(operator === '-'){
    //         result.value = parseInt(firstNumber) - parseInt(secondNumber)
    //     }
    //     else if(operator === '*'){
    //         result.value = parseInt(firstNumber) * parseInt(secondNumber)
    //     }
    //     else if(operator === '/'){
    //         result.value = parseInt(firstNumber) / parseInt(secondNumber)
    //     }
    // }
    // else{
    //     alert('error!')
    // }
    // 2번재 방법 switch 사용하기
    // 1. firstNumber로 들어오는 경우
    
    if(firstNumber&&!secondNumber){
    operator = op
    printOperator.value = op
    }
    if(secondNumber){
        switch (operator){
            case '+':
                result.value = parseInt(firstNumber) + parseInt(secondNumber);
                firstNumber = result.value
                printOperator.value =''
                operator =''
                secondNumber = ''
                break;
            
            case '-':
                result.value = parseInt(firstNumber) -parseInt(secondNumber);
                firstNumber = result.value
                printOperator.value =''
                operator =''
                secondNumber = ''
                break;
            case '*' :
                result.value = parseInt(firstNumber) * parseInt(secondNumber);
                firstNumber = result.value
                printOperator.value =''
                operator =''
                secondNumber = ''
                break;
            case '/' :
                result.value = parseInt(firstNumber) / parseInt(secondNumber);
                firstNumber = result.value
                printOperator.value =''
                operator =''
                secondNumber = ''
                break;
            default:
                break;
        }}
    else{
        alert('Please Press Number!')
    }
    
})




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
