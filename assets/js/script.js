// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");
var questionsDiv = articlesDiv.getElementsByClass("questions")
questionsDiv.style.visibility = 'hidden'
// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";
mainDiv.children[1].style.color = "white";

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
      answer: "d"
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
 // var firstQuestion=questions[0];
  var question = questions[count]["question"]
  var answers = questions[count]["answers"]
  console.log(question, answers);
  count++;

  
      }
    

    // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
  } )};
