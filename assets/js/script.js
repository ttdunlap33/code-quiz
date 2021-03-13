var correct = 0
var timerCount = 100
var timerElement = document.querySelector("#timer")
var isWin=false
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");
var questionsDiv = document.querySelector("#questions")
questionsDiv.style.display = 'none'
var submitDiv = document.querySelector("#submit")
submitDiv.style.display = 'none'
// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";


var count = 0;
var questions = [
  {
      question: "Commonly used data types DO NOT include:",
      answers: {
          a: "strings",
          b: "booleans",
          c: "numbers",
          d: "alerts"
      },
      answer: "d"
  },
  {
      question: "The condition in an if/else statement is enclosed within _____?",
      answers: {
          a: "quotes",
          b: "curly brackets",
          c: "parentheses",
          d: "square brackets"
      },
      answer: "c"
  },
  {
      question: "Arrays in JavaScript can be used to store ____.",
      answers: {
          a: "numbers and strings",
          b: "other arrays",
          c: "booleans",
          d: "all of the above"
      },
      answer: "d"
  },
  {
      question: "String values must be enclosed within ____ when being assigned to variables",
      answers: {
          a: "quotes",
          b: "curly brackets",
          c: "parentheses",
          d: "commas"
      },
      answer: "a"
  },
  {
      question: "A useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
          a: "console.log",
          b: "JavaScript",
          c: "terminal/bash",
          d: "for loops"
      },
      answer: "a"
  },

];


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startQuiz() {
  var startDiv = document.querySelector("#startScreen")
  startDiv.style.display = 'none'
  questionsDiv.style.display = 'block' 
  nextQuestion("start")
  startTimer() 
}
  
  
function nextQuestion(elem) {
   if (elem !=="start") {
    var previous = questions[count-1]["answer"]
    if(elem === previous) {
      correct++
    } else {
      if (timerCount >=10){
        timerCount = timerCount -10
      } else{
        timerCount = 0
      }
      timerElement.textContent = timerCount;}
  }
  if (timerCount<=0 || count >= questions.length) {
    isWin=true
    stopQuiz()
    return;
  }

  var questionElement = document.querySelector("#question")
  var aElement = document.querySelector("#a")
  var bElement = document.querySelector("#b")
  var cElement = document.querySelector("#c")
  var dElement = document.querySelector("#d")
  var question = questions[count]["question"]
  var answers = questions[count]["answers"]
  questionElement.textContent = question
  aElement.textContent = answers["a"]
  bElement.textContent = answers["b"]
  cElement.textContent = answers["c"]
  dElement.textContent = answers["d"]
  count++;
  }
  function stopQuiz(){
    var questionsDiv = document.querySelector("#questions")
    questionsDiv.style.display = 'none'
    submit.style.display = 'block' 
    var scoreElement = document.querySelector("#score")
    scoreElement.textContent="Your score: " + (correct/questions.length) * 100 + "% with a time of: " + (timerCount) + " seconds left."
  } 

  function submitScore() {
    var inputElement = document.querySelector("#initial")
    var initial = inputElement.value
    console.log(initial)
    var score = (timerCount)
    var highScoreDiv = document.querySelector("#highScore")
    highScoreDiv.textContent = "1." + initial.toUpperCase() + " - " + score
  }

    // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
    function startTimer() {
      // Sets timer
      timer = setInterval(function() {
        timerCount--;
        if (timerCount > 0) {
          // Tests if win condition is met
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            timerCount++;
          }
        }
        // Tests if time has run out
        else {
          // Clears interval
          clearInterval(timer);
          timerCount = 0
          stopQuiz()
        } 
        timerElement.textContent = timerCount;
      }, 1000);

    }

    function startOver() {
      location.reload();
    }

