import { Quiz } from "./questions";

// create variables
let correct = 0;
let incorrect = 0;
let counter = 2 * 60;
let currentTime;
let questionBank = Quiz;
let timer;

// grab elements on page
const $timerDiv = document.querySelector("#timer");
const $resultsDiv = document.querySelector("#results");
const $startBtn = document.querySelector("#start-button");
const $quizForm = document.querySelector("#quiz-form");

// create run function
function run() {
  // clear interval
  clearInterval(timer);

  // empty timer div
  $timerDiv.innerHTML = "";

  // restart interval
  timer = setInterval(decrement, 1000);

  // empty results div
  $resultsDiv.innerHTML = "";

  // reset correct and incorrect
  correct = 0;
  incorrect = 0;

  // reset counter
  counter = 2 * 60;

  // print current time to page
  $timerDiv.textContent = "Time Remaining: 2:00";

  // hide start-quiz button
  $startBtn.style.display = "none";
}

// create decrement function to lower counter by one every second
function decrement() {
  counter--;

  // convert the counter to time and print to page
  var $counter = counter * 1000;
  currentTime = timeConverter($counter);

  // print to page
  $timerDiv.textContent = `Time Remaining: ${currentTime}`;

  // if counter runs out, run gradeQuiz function
  if (counter === 0) {
    gradeQuiz();
    clearInterval(timer);
    $startBtn.style.display = "";
    $timerDiv.innerHTML = "";
    $quizForm.innerHTML = "";
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
  $quizForm.innerHTML = "";

  // loop through quizBank array
  questionBank.forEach(function(question, index) {
    // create div to hold question
    const $question = document.createElement("div");
    $question.classList.add("form-group", "my-4");

    // add question to div
    const $label = document.createElement("h5");
    $label.textContent = `${index + 1} ${question.question}`;
    $label.classList.add("question");

    $question.appendChild($label);

    // shuffle answer choices
    question.choices = question.choices.sort(function() {
      return 0.5 - Math.random();
    });

    // create a loop to iterate through quizBank's choices and create radio buttons for each one
    for (var i = 0; i < question.choices.length; i++) {
      // create a div for choice and add bootstrap classes
      const $choice = document.createElement("div");
      $choice.classList.add("form-check");

      // create an input tag for radio buttons
      const $radio = document.createElement("input");

      // add attributes to radio buttons
      $radio.setAttribute("type", "radio");
      $radio.setAttribute("value", `${question.choices[i]}`);
      $radio.setAttribute("name", `${index}`);
      $radio.classList.add("form-check-input");

      // create label to print choice to page
      const $choiceLabel = document.createElement("label");
      $choiceLabel.textContent = `${question.choices[i]}`;
      $choiceLabel.classList.add("form-check-label");

      $choice.append($radio, $choiceLabel);

      // add whole radio button to question
      $question.appendChild($choice);
    }

    // add question to page
    $quizForm.appendChild($question);
  });

  // create a submit button
  const $submitBtn = document.createElement("button");
  $submitBtn.setAttribute("id", "submit-button");
  $submitBtn.classList.add(
    "btn",
    "btn-success",
    "btn-lg",
    "col-12",
    "col-md-4",
    "col-lg-3",
    "my-4"
  );
  $submitBtn.onclick = submitQuiz;

  const $submitBtnSpan = document.createElement('span');
  $submitBtnSpan.textContent = 'Submit';

  $submitBtn.append($submitBtnSpan);
  $quizForm.append($submitBtn);
}

// create function to check which radio btns are checked and update userAnswer in questionBank
function checkedRadioBtns() {
  for (let i = 0; i < $quizForm.length; i++) {
    if ($quizForm[i].checked) {
      const questionIdx = $quizForm[i].name;
      const answer = $quizForm[i].value;
      questionBank[questionIdx].userAnswer = answer;
    }
  }
}

// create a "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
$quizForm.addEventListener('change', checkedRadioBtns);

function gradeQuiz() {
  // check to see if userAnswer === answer
  questionBank.forEach(question => {
    console.log(question);
    const $userAnswer = question.userAnswer;
    const $answer = question.answer;

    if ($userAnswer === $answer) {
      correct++;
    } else {
      incorrect++;

      // print questions user got wrong and correct answer
      const $question = document.createElement('h5');
      $question.textContent = `${question.id}) ${question.question}`;

      const $incorrectAnswer = document.createElement('p');
      $incorrectAnswer.classList.add('incorrect-answer');
      $incorrectAnswer.textContent = `Your Answer: ${$userAnswer}`;
      
      const $correctAnswer = document.createElement('p');
      $correctAnswer.classList.add('correct-answer');
      $correctAnswer.textContent = `Correct Answer: ${$answer}`;

      $resultsDiv.append($question, $incorrectAnswer, $correctAnswer);
    }
  });

  // create div to hold results
  const $results = document.createElement('div');
  $results.classList.add('mb-5');

  // create h2 for correct and incorrect
  const $correct = document.createElement('h2');
  $correct.textContent = `Correct: ${correct}`;

  const $incorrect = document.createElement('h2');
  $incorrect.textContent = `Correct: ${incorrect}`;

  const percent = Math.round((correct / questionBank.length) * 100);
  const $percent = document.createElement('h2');
  $percent.textContent = `Percent Correct: ${percent}%`;
  
  $results.append($correct, $incorrect, $percent);

  $resultsDiv.insertBefore($results, $resultsDiv.firstChild);
}

$startBtn.addEventListener('click', function() {
  run();
  renderQuiz();
})

function submitQuiz(event) {
  event.preventDefault();
  gradeQuiz();
  clearInterval(timer);
  $startBtn.style.display = '';
  $timerDiv.innerHTML = '';
  $quizForm.innerHTML = '';
};
