import { Quiz } from "./questions";

// create variables
const correct = 0;
const incorrect = 0;
const counter = 3 * 60;
const currentTime;
const $choice;
const questionBank = [];


// create run function
function run() {
  // clear interval
  clearInterval(timer);

  // empty timer div
  $("timer").empty();

  // restart interval
  timer = setInterval(decrement, 1000);

  // empty results div
  $("#results").empty();

  // reset correct and incorrect
  correct = 0;
  incorrect = 0;

  // reset counter
  counter = 3 * 60;

  // print current time to page
  $("#timer").text(`Time Remaining: 3:00`);

  // hide start-quiz button
  $("#start-button").hide();
}

// create decrement function to lower counter by one every second
function decrement() {
  counter--;

  // convert the counter to time and print to page
  var $counter = counter * 1000;
  currentTime = timeConverter($counter);

  // print to page
  $("#timer").text(`Time Remaining: ${currentTime}`);

  // if counter runs out, run gradeQuiz function
  if (counter === 0) {
    gradeQuiz();
    clearInterval(timer);
    $("#start-button").show();
    $("#timer").empty();

    $("#quiz-form").empty();
  }
}

function timeConverter(t) {
  var minutes = Math.floor(t / 1000 / 60);
  var seconds = t / 1000 - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  return minutes + ":" + seconds;
}

// Create quiz creation function for each question in the quiz bank
function renderQuiz() {
  // clear #quiz-form div
  $("#quiz-form").empty();

  // add questions to question bank
  questionBank.push(Quiz);

  // loop through quizBank array
  questionBank.forEach(function(question, index) {
    // create div to hold question
    var $question = $("<div>").addClass("form-group my-4");

    // add question to div
    var $label = $("<h5>")
      .text(index + 1 + ") " + question.question)
      .addClass("question")
      .appendTo($question);

    // shuffle answer choices
    question.choices = question.choices.sort(function() {
      return 0.5 - Math.random();
    });

    // create a loop to iterate through quizBank's choices and create radio buttons for each one
    for (var i = 0; i < question.choices.length; i++) {
      // create a div for choice and add bootstrap classes
      $choice = $("<div>").addClass("form-check");

      // create an input tag for radio buttons
      var $radio = $("<input>");

      // add attributes to radio buttons
      $radio
        .attr({
          type: "radio",
          value: question.choices[i],
          name: index,
          class: "form-check-input"
        })
        .appendTo($choice);

      // create label to print choice to page
      var $choiceLabel = $("<label>");
      $choiceLabel
        .text(question.choices[i])
        .addClass("form-check-label")
        .appendTo($choice);

      // add whole radio button to question
      $choice.appendTo($question);
    }

    // add question to page
    $question.appendTo($("#quiz-form"));
  });

  // create a submit button
  var $submitBtn = $("<button>");
  $submitBtn.attr({
    id: "submit-button",
    class: "btn btn-success btn-lg col-12 col-md-4 col-lg-3 my-4"
  });

  var $submitBtnSpan = $("<span>")
    .text("Submit")
    .appendTo($submitBtn);

  $submitBtn.appendTo($("#quiz-form"));
}

// create a "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
$("#quiz-form").on("change", ".form-check-input", function() {
  console.log(quizBank);
  // Get question index out of "name" attribute so we know what question you answered
  var questionIndex = $(this).attr("name");

  // get value out of radio button you selected
  var answer = $(this).val();

  // set answer to quizBank's userAnswer property
  quizBank[questionIndex].userAnswer = answer;
});

function gradeQuiz() {
  // check to see if userAnswer === answer
  for (var i = 0; i < quizBank.length; i++) {
    var $userAnswer = quizBank[i].userAnswer;
    var $answer = quizBank[i].answer;

    if ($userAnswer === $answer) {
      correct++;
    } else {
      incorrect++;

      // print questions user got wrong and correct answer
      var $question = $("<h5>").text(i + 1 + ") " + quizBank[i].question);
      var $incorrectAnswer = $("<p>")
        .addClass("incorrect-answer")
        .text(`Your Answer: ${$userAnswer}`);
      var $correctAnswer = $("<p>")
        .addClass("correct-answer")
        .text(`Correct Answer: ${$answer}`);
      $("#results").append($question, $incorrectAnswer, $correctAnswer);
    }
  }

  // create div to hold results
  var $results = $("<div>").addClass("mb-5");

  // create h2 for correct and incorrect
  var $correct = $("<h2>").text(`Correct: ${correct}`);
  var $incorrect = $("<h2>").text(`Incorrect: ${incorrect}`);
  var percent = Math.round((correct / quizBank.length) * 100);
  var $percent = $("<h2>").text(`Percent Correct: ${percent}%`);

  $results.append($correct, $incorrect, $percent);

  $("#results").prepend($results);
}

$("#start-button").on("click", function() {
  run();
  renderQuiz();
});

$(document).on("click", "#submit-button", function(event) {
  event.preventDefault();
  gradeQuiz();
  clearInterval(timer);
  $("#start-button").show();
  $("#timer").empty();
  $("#quiz-form").empty();
});
