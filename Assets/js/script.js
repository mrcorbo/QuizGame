var startArea = document.getElementById("start");
var quizArea = document.getElementById("quizQs");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var timeLeft = 10; 

startBtn.addEventListener("click", function () {
    startArea.style.display = "none";
    quizArea.style.display = "block";
    displayQuestion();
    startTimer();
});
function startTimer(){
    var timer = setInterval(function(){
        if (timeLeft>0){
            timeLeft--;
            timerEl.innerText="Time left: " + timeLeft;
        }else {
            clearInterval(timer);
        }
    },1000);
}
var questions = [
    {
        questionText: "What is the syntax for an if statement?",
        choices: ["if {}", "if()", "if[]", "if:"],
        answer: "if()"
    },
    {
        questionText: "Which javascript data type is not an actual data type?",
    }
]
var questionNum = 0;
function displayQuestion() {
    var qText = document.getElementById("questionText");
    qText.innerText = questions[questionNum].questionText;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (var i=0; i<questions[questionNum].choices.length; i++){
        var button = document.createElement("button");
        button.innerText = questions[questionNum].choices[i];
        choices.appendChild(button);
    }

};

// Questions:
//
//
//     "What is the correct syntax to create an array?"
//     "Which function replaces the text of the element called 'info'?"
//     "Which code creates a loop that will run as many times as there are entries in the array?"

