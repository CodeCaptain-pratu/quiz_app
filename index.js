let quizInfo=[
    {
        question:"How many bones are in the human body?",
        options:["200","206", "210","215"],
        answer:"206",
    },
    {
        question:"What is the hardest natural substance on Earth?",
        options:["Iron","Diamond","Platinum","Gold"],
        answer:"Diamond",
    },
    {
        question:"Which country is famous for the Great Wall?",
        options:["Japan","China","India","Russia"],
        answer:"China",
    },
    {
        question:"How many continents are there on Earth?",
        options:["5","6","7","8"],
        answer:"7",
    },
    {
        question:"Which gas do plants absorb from the atmosphere?",
        options:["Oxygen","Nitrogen","CarbonDioxide","Hydrogen"],
        answer:"CarbonDioxide",
    },
    {
        question:"What is the largest ocean on Earth?",
        options:["AtlanticOcean","IndianOcean","ArcticOcean","PacificOcean"],
        answer:"PacificOcean",
    },
    {
        question:"Who invented the telephone?",
        options:["ThomasEdison", "AlexanderGrahamBell", "NikolaTesla", "IsaacNewton"],
        answer:"AlexanderGrahamBell",
    },
    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        options:["var", "let","const", "All of the above"],
        answer:"All of the above",
    },
    {
        question:"Which method is used to print something in the browser console?",
        options:["print()","log()","console.log()","document.write()"],
        answer:"console.log()",
    },
    {
        question:"What is the output of typeof null in JavaScript?",
        options:[ "null", "object", "undefined", "string"],
        answer:"object",
    },
]

let startQuizBox = document.querySelector(".startQuiz");
let startQuizBtn = document.querySelector(".startQuizBtn");

let playQuizBox = document.querySelector(".playQuiz");
let nextQBtn = document.querySelector(".nextQBtn");

let endQuizBox = document.querySelector(".endQuiz");
let restartQuizBtn = document.querySelector(".restartQuizBtn");
let exitBtn = document.querySelector(".exitBtn");

let timerElement=document.querySelector(".timer");
console.log(timerElement);
let showScore=document.querySelector(".showScore");

let currentQuestionIndex = 0; // सुरुवातीला पहिला प्रश्न दाखवायचा
let score=0;
let time=4;

startQuizBtn.addEventListener("click", function () {
    playQuizBox.classList.remove("hide");
    playQuizBox.style.display = "flex";
    startQuizBox.classList.add("hide");
    currentQuestionIndex = 0; // Reset the quiz index
    startQuiz();
});

nextQBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizInfo.length) {
        showQuestion(); // पुढील प्रश्न दाखवा
    } else {
        playQuizBox.classList.add("hide"); // Quiz संपले, खेळ बंद करा
        endQuizBox.classList.remove("hide");
        endQuizBox.style.display = "flex";
        showScore.innerHTML=score;
    }
});

restartQuizBtn.addEventListener("click", function () {
    playQuizBox.classList.remove("hide");
    playQuizBox.style.display = "flex";
    endQuizBox.classList.add("hide");
    time=4;
    timerElement.innerText=`Time Left : ${time}s`
    startQuizTimer();
});

exitBtn.addEventListener("click", function () {
    startQuizBox.classList.remove("hide");
    startQuizBox.style.display = "flex";
    playQuizBox.classList.add("hide");
    endQuizBox.classList.add("hide");
});

function startQuizTimer(){
  
    let timeInterval=setInterval(function(){
        timerElement.innerText=`Time Left : ${time}s`;
        time--;
        if(time<0){
            clearInterval(timeInterval);
            playQuizBox.classList.add("hide"); // Quiz संपले, खेळ बंद करा
            endQuizBox.classList.remove("hide");
            endQuizBox.style.display = "flex";
            showScore.innerHTML=score;
        }
    },1000);
}
function showQuestion() {
    let data = quizInfo[currentQuestionIndex];
    let questionBox = document.querySelector(".questionContainer");
    let optionBox = document.querySelector(".optionsContainer");

    questionBox.innerHTML = `<p class="q">${data.question}</p>`;

    optionBox.innerHTML = ""; // जुन्या पर्यायांना clear करणे
    data.options.forEach((option) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn2");
        button.addEventListener("click", function(){
            let correctAnswer =data.answer;
            let allOptions=document.querySelectorAll(".btn2");
            
            allOptions.forEach(function(btn){//make other button disabled
                btn.disabled=true;
            })            
            if (option === correctAnswer) {
                score++;
                button.style.backgroundColor="green";
            }else{
                button.style.backgroundColor="red";
            }
        });
        optionBox.appendChild(button);
    });
}

function startQuiz(){
    startQuizTimer();
    showQuestion();
}
//show first question 
