const questionText = document.querySelector("#questionText");
const playerAnswer = document.querySelector("#playerAnswer");
const submitBtn = document.querySelector("#submitBtn");
let answer = 4;
let num1;
let num2;
let symbol;

submitBtn.addEventListener("click", submit);
playerAnswer.addEventListener("click", clear);

function submit(){
    if(playerAnswer.value == answer){
        symbol = Math.floor(Math.random() * 4) + 1;
        
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
    playerAnswer.value = "";
};

const questionText2 = document.querySelector("#questionText2");
const playerAnswer2 = document.querySelector("#playerAnswer2");
const submitBtn2 = document.querySelector("#submitBtn2");
let answer2 = 1.5;
let symbols = ["+", "-", "*"];
let question = [ , , , , ];

submitBtn2.addEventListener("click", submit2);
playerAnswer2.addEventListener("click", clear2);

function submit2(){
    if (answer2 == playerAnswer2.value){
        question[1] = symbols[Math.floor(Math.random() * 3)];
        question[3] = symbols[Math.floor(Math.random() * 3)];

        for(let i = 0; i < 5; i += 2){
            question[i] = ((Math.floor(Math.random() * 200) + 1) * 0.05).toFixed(2);
        };

        question[1] = symbols[0];
        question[3] = symbols[2];
        if (question[1] == "+"){
            if (question[3] == "+"){
                answer2 = Number(question[0]) + Number(question[2]) + Number(question[4]);
            };
            if (question[3] == "-"){
                answer2 = Number(question[0]) + Number(question[2]) - Number(question[4]);
            };
            if (question[3] == "*"){
                question[(Math.floor(Math.random() * 2) + 1) * 2] = Math.floor(Math.random() * 20) + 1;
                answer2 = Number(question[0]) + Number(question[2]) * Number(question[4]);
            };
        };
        if (question[1] == "-"){
            if (question[3] == "+"){
                answer2 = Number(question[0]) - Number(question[2]) + Number(question[4]);
            };
            if (question[3] == "-"){
                answer2 = Number(question[0]) - Number(question[2]) - Number(question[4]);
            };
            if (question[3] == "*"){
                question[(Math.floor(Math.random() * 2) + 1) * 2] = Math.floor(Math.random() * 20) + 1;
                answer2 = Number(question[0]) - Number(question[2]) * Number(question[4]);
            };
        };
        if (question[1] == "*"){
            if (question[3] == "+"){
                question[(Math.floor(Math.random() * 2) + 1) * 2] = Math.floor(Math.random() * 20) + 1;
                answer2 = Number(question[0]) * Number(question[2]) + Number(question[4]);
            };
            if (question[3] == "-"){
                question[(Math.floor(Math.random() * 2) + 1) * 2] = Math.floor(Math.random() * 20) + 1;
                answer2 = Number(question[0]) * Number(question[2]) - Number(question[4]);
            };
            if (question[3] == "*"){
                question[0] = Math.floor(Math.random() * 20) + 1;
                question[4] = Math.floor(Math.random() * 20) + 1;
                answer2 = Number(question[0]) * Number(question[2]) * Number(question[4]);
            };
        };

        console.log(...question);

        answer2 = Math.round(answer2 * 100) / 100;
        console.log(answer2)
        questionText2.textContent = `${question[0]}${question[1]}${question[2]}${question[3]}${question[4]}=?`
    }
    else{
        playerAnswer2.value = "Wrong answer :("
    }
};

function clear2(){
    playerAnswer2.value = "";
};

