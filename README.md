# cloning-zerocho-webgame
인프런 제로초 강사님 웹게임 클론 코딩
1. 순서도(알고리즘을 확실하게 잡고 갈 것) 그리고 코딩을 할 때 순서도에 맞게 따라갈 것 괜히 먼저 건드렸다가 나중에 꼬임.

2. 주석을 활용할 것 내가 무엇을 하고 있는지 앞으로 어떤 절차를 밟아야 하는지 명확하게 알 수 있음.

3. 함수 안에서 선언문은 밖으로 못 가지고 오는데, 이것을 해결하는 방법이 함수 밖에서 let a; 를 해놓고 함수에서  
function a (){a = 123}
이런식으로 해결하면 됨

4.  입력하는 게 실시간으로 저장되게 하는법
let newWord;
function inputEvent(event){
    newWord = event.target.value; 
}

5. if문에서 뭔가 비워져있는가를 확인하려면
if(!word) 이런식으로 만들면 됨

6. 화면에 구현되는 숫자를 건드릴 때 그 숫자의 타입이 string인지 number인지 잘 확인하면서 할 것!

8/6 ~ 8/9 계산기 공부

[계산기.txt](https://github.com/dlxorb96/cloning-zerocho-webgame/files/6952606/default.txt)
https://github.com/dlxorb96/cloning-zerocho-webgame/commit/00ed92d139694ea7b3b347d07ce269df759820ea
https://github.com/dlxorb96/cloning-zerocho-webgame/commit/fbc3c260ad9e372b496784c06e2e2a8f92e86090
https://github.com/dlxorb96/cloning-zerocho-webgame/commit/530bd09440d850b1d641e70e5da71afb367b75d3
https://github.com/dlxorb96/cloning-zerocho-webgame/commit/66f699db8e3e34735d7b54fba0d5a730c40030f6
