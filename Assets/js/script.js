var startArea = document.getElementById("start");
var quizArea = document.getElementById("quizQs");
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var timeLeft = 300;
var response = document.getElementById("response");
var correct = 0;
var timer;
var finishArea = document.getElementById("quizEnd");

startBtn.addEventListener("click", function () {
    startArea.style.display = "none";
    quizArea.style.display = "block";
    startTimer();
    displayQuestion();
});
function startTimer() {
    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = "Time left: " + timeLeft;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};
var questions = [
    {
        questionText: "What is the syntax for an if statement?",
        choices: ["if {}", "if()", "if[]", "if:"],
        answer: "if()"
    },
    {
        questionText: "Which javascript data type is not an actual data type?",
        choices: ["boolean", "number", "alpha", "string"],
        answer: "alpha"
    },
    {
        questionText: "What is the correct syntax to create an array?",
        choices: ["var array = []", "var array() =", "var array = {}", "var array:"],
        answer: "var array = []"
    },
    {
        questionText: "Which function replaces the text of the element called 'info'?",
        choices: ["function(info) =", "replaceText.info =", "info.function()", "info.textContent ="],
        answer: "info.textContent ="
    }
];
var questionNum = 0;
function displayQuestion() {
    var qText = document.getElementById("questionText");
    qText.innerText = questions[questionNum].questionText;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (var i = 0; i < questions[questionNum].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questions[questionNum].choices[i];
        button.addEventListener("click", function (event) {
            console.log(questionNum,questions.length)
            var choice = event.target.innerText;
            console.log(choice);
            if (choice != questions[questionNum].answer) {
                timeLeft = timeLeft - 30;
                response.innerText = "Incorrect answer, you've been penalized 30 seconds."
            } else {
                response.innerText = "Correct!"
                correct++;
            }
            questionNum++;
            if (questionNum==questions.length){
                console.log("inside");
                quizArea.style.display="none";
                clearInterval(timer);
                gameOver();
                return;
            }
            displayQuestion();
        });
        choices.appendChild(button);
    }
};
function gameOver(){
    var congrats = document.createElement("h3");
    congrats.innerText = "Congratulations, you scored: " + (correct*25 + timeLeft);
    finishArea.appendChild(congrats);
    var initials = document.createElement("input");
    finishArea.appendChild(initials);
    var saveBtn = document.createElement("button");
    saveBtn.innerText = "Save score"
    saveBtn.addEventListener("click", function(){
        var savedInitials = initials.value;
        var score = {initials:savedInitials, score:(correct*25 + timeLeft)};
        var prevScores = JSON.parse(localStorage.getItem("scores"))|| [];
        prevScores.push(score);
        localStorage.setItem("scores", JSON.stringify(prevScores));
    });
    finishArea.appendChild(saveBtn);
}

function hiScores(){
    var savedScores = localStorage.getItem("scores", JSON.parse(prevScores));
    console.log(savedScores);
}