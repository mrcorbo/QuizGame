var startArea = document.getElementById("start");
var quizArea = document.getElementById("quizQs");
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
    startArea.style.display = "none";
    quizArea.style.display = "block";
    displayQuestion();
});
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
    var qText = document.getElementById("questionText")
    qText.innerText = questions[questionNum].questionText
};

// Questions:
//
//
//     "What is the correct syntax to create an array?"
//     "Which function replaces the text of the element called 'info'?"
//     "Which code creates a loop that will run as many times as there are entries in the array?"

