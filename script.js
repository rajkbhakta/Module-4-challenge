var questionsarray = [
  {
    question: "common used data types do not include:",
    options: ["alerts", "booleans", "strings", "numbers"],
    answer: "alerts",
  },
  {
    question: "Arrays in javascript can be used to store:",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all the above",
    ],

    answer: "all the above",
  },
  {
    question: "the condition of an if else statement is enclosed with:",
    options: ["quotes", "curley brackets", "parenthesis", "square brackets"],
    answer: "quotes",
  },
  {
    question: "A very usefull tool to debug javascript is:",
    options: ["console.log", "debugger", "for loops", "terminal/bash"],
    answer: "console.log",
  },
];

var timerEl = document.getElementById("timer");
var counter = 100;
var flag = false;

var btn = document.querySelector("#start-button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  setInterval(function () {
    timerEl.innerHTML = counter;
    counter--;
    if (counter <= 0) {
      timerEl.innerHTML = "you Lost";
      document.getElementById("question").className = " hide";
    }
    if (flag === true) {
      var currentTime = counter;
      timerEl.innerHTML = "you Won!" + " Your score time:" + currentTime;
      document.getElementById("question").className = " hide";
    }
  }, 1000);

  document.querySelector("#start-page").className += " hide";
  document.querySelector("#question").setAttribute("class", "");
});

function displayQuestion(q) {
  var question = document.createElement("div");
  question.setAttribute("class", "questions");

  question.innerHTML = "<h1>" + q.question + "</h1>";
  q.options.forEach((item, index) => {
    question.innerHTML += "<button class='option-btn'>" + item + "</button>";
  });
  document.getElementById("question").appendChild(question);

  clickFuntion();
}

var currentQuestion = 0;

displayQuestion(questionsarray[currentQuestion]);

function clickFuntion() {
  for (
    var i = 0;
    i < document.getElementsByClassName("option-btn").length;
    i++
  ) {
    document
      .getElementsByClassName("option-btn")
      [i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target.innerHTML);
        console.log(questionsarray[currentQuestion].answer);
        if (e.target.innerHTML === questionsarray[currentQuestion].answer) {
          console.log("correct");
          var result = document.createElement("p");
          result.innerHTML = "correct!";

          e.target.parentNode.appendChild(result);
        } else {
          console.log("incorrect");
          var result = document.createElement("p");
          counter -= 10;
          result.innerHTML = "wrong!";
          e.target.parentNode.appendChild(result);
        }

        setTimeout(() => {
          document.getElementsByClassName("questions")[
            currentQuestion
          ].className += " hide ";
          displayQuestion(questionsarray[currentQuestion + 1]);

          currentQuestion++;
        }, 1000);
      });
  }
}
