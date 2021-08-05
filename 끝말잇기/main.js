const inputNumber = document.querySelector('.FORM');
// 숫자입력 폼
const peopleNumber = document.querySelector('.people__number');
// 숫자입력 폼의 안에 넘버
const inputWordsForm = document.querySelector('#wordForm');
// 단어입력 폼
const inputWords = document.querySelector('.end_talk');
// 단어입력 창
const $h2 = document.querySelector('h2');
// 화면에 구현되는 글자
const $h3 = document.querySelector('h3');
// 몇번재 제시어니
const $span = document.querySelector('h3 span');


// 1. 몇명이 참가하는가?
function numberSubmitEvent(event){
    event.preventDefault(); //새로고침 막기
    inputNumber.classList.add('hidden'); //폼 사라지기
    inputWordsForm.classList.remove('hidden'); //단어입력 폼 생기기
    $h3.classList.remove('hidden');
    number = peopleNumber.value;
}
//일단 1번은 건드릴거 없음 사람수 나중에 건드리는거빼고

// 2.첫 번째 사람인가?

let word;   //제시어
let newWord;     //새로 입력한 단어
let number; //사람수



// 단어입력 폼 서밋 이벤트 함수

function wordSubmitEvent(event){
    event.preventDefault(); //새로고침 막기
    // 제시어가 비어있는 경우
    if(!word){
        word = newWord;
        $h2.textContent = word;
        inputWords.value = '';

    }
    // 제시어가 들어있는 경우
    else{
        //맞는 답을 쓰는 경우
        if(word[word.length-1] === newWord[0]){
            word = newWord
            $h2.textContent = word;
            inputWords.value = '';
        }
        //틀린 답을 쓰는 경우
        else{
            $h2.textContent = 'GameOver';
            inputWords.value = '';
        }
    }
    if($span.textContent !== number){
        $span.textContent = `${Number($span.textContent) + 1}`
    }
    else{
        $span.textContent = '1';
    }
}

//let으로 미리 밖에서 만들어놓고 함수로 설정하면 됨

//제시어가 들어있는 경우에 두 가지 경우가 발생한다
// 1번째 맞는 정답을 쓰는경우
// 틀린 정답을 쓰는경우


//인풋 이벤트
function inputEvent(event){
    newWord = event.target.value; // 입력하는게 실시간으로 newWords가 되도록 하는 방법
}



//새로고침을 막고
//입력한 숫자를 저장하기 > 나중에 n번째의 max가 될거임
//이 폼이 사라지고 단어입력 폼이 생겨남


// 숫자입력 폼 서밋 이벤트
inputNumber.addEventListener('submit', numberSubmitEvent);

// 단어입력 폼 서밋 이벤트
inputWordsForm.addEventListener('submit', wordSubmitEvent);

//단어 입력 인풋 입력 이벤트
inputWords.addEventListener('input', inputEvent)

// peopleNumber.addEventListener('click', function (event){
//     number = event.target.value
// })