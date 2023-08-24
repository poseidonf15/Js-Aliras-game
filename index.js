const questionText = document.querySelector("#questionText");
const playerAnswer = document.querySelector("#playerAnswer");
const submitBtn = document.querySelector("#submitBtn");
const clearBtn = document.querySelector("#clearBtn");
let answer = 4;
let num1;
let num2;
let symbol;

submitBtn.addEventListener("click", submit);
clearBtn.addEventListener("click", clear);

function submit(){
    if(playerAnswer.value == answer){
        symbol = Math.floor(Math.random() * 4) + 1;
        console.log(symbol)
        
        switch(symbol){
            case(1):
                num1 = Math.floor(Math.random() * 1001);
                num2 = Math.floor(Math.random() * 1001);
                questionText.textContent = `${num1}+${num2}=?`
                answer = num1 + num2
                break;
            case(2):
                num1 = Math.floor(Math.random() * 1001);
                num2 = Math.floor(Math.random() * 1001);
                questionText.textContent = `${num1}-${num2}=?`
                answer = num1 - num2
                break;
            case(3):
                num1 = Math.floor(Math.random() * 20) + 1;
                num2 = Math.floor(Math.random() * 20) + 1;
                questionText.textContent = `${num1}*${num2}=?`
                answer = num1 * num2
                break;
            case(4):
                answer = Math.floor(Math.random() * 20) + 1;
                num1 = Math.floor(Math.random() * 20) + 1;
                questionText.textContent = `${answer*num1}/${num1}=?`
                break;
        }
    }
    else{
        playerAnswer.value = "Wrong answer :("
    }
};

function clear(){
    playerAnswer.value = '';
};
