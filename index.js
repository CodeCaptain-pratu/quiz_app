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

let entryText=document.querySelector(".entryText");
let startBtn=document.querySelector(".start");
startBtn.addEventListener("click",function(){
    entryText.style.display="none";
    startBtn.style.display="none";
})
