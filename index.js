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
        answer:"Carbon Dioxide",
    },
    {
        question:"What is the largest ocean on Earth?",
        options:["AtlanticOcean","IndianOcean","ArcticOcean","PacificOcean"],
        answer:"Pacific Ocean",
    },
    {
        question:"Who invented the telephone?",
        options:["ThomasEdison", "AlexanderGrahamBell", "NikolaTesla", "IsaacNewton"],
        answer:"Alexander Graham Bell",
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
let startQuizBox=document.querySelector(".startQuiz");
let startQuizBtn=document.querySelector(".startQuizBtn");

let playQuizBox=document.querySelector(".playQuiz");
let nextQBtn=document.querySelector(".nextQBtn");

let endQuizBox=document.querySelector(".endQuiz");
let endQuizBtn=document.querySelector(".endQuizBtn");
let exitBtn=document.querySelector(".exitBtn");

startQuizBtn.addEventListener("click",function(){
    playQuizBox.classList.remove("hide");
    playQuizBox.style.display="flex";
    startQuizBox.classList.add("hide");
});

nextQBtn.addEventListener("click",function(){
    endQuizBox.classList.remove("hide");
    endQuizBox.style.display="flex";
   playQuizBox.classList.add("hide");
});

endQuizBtn.addEventListener("click",function(){
    playQuizBox.classList.remove("hide");
    playQuizBox.style.display="flex";
    endQuizBox.classList.add("hide");
});

exitBtn.addEventListener("click",function(){
    startQuizBox.classList.remove("hide");
    startQuizBox.style.display="flex";
    playQuizBox.classList.add("hide");
    endQuizBox.classList.add("hide");
    
})

let questionE1=document.querySelector(".question");
let options=document.querySelector(".options");
