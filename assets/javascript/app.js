// create variables
var correct = 0;
var counter = 5 * 60 * 1000;
var timer;
var quizRunning = false;
var currentTime = "5:00";

console.log(counter)

// create quiz bank
var quizBank = [
  {
    question: "Which of the following is not a primary color?",
    choices: [
      "green",
      "blue",
      "yellow",
      "red"
    ],
    answer: "blue",
    userAnswer: ""
  },
  {
    question: "What is the answer of 10 / (2 + 3) * 6?",
    choices: [
      12,
      23,
      48,
      0.33
    ],
    answer: 12,
    userAnswer: ""
  },
  {
    question: "Which of the following vegetables is botanically considered a fruit?",
    choices: [
      "carrot",
      "tomato",
      "broccoli",
      "celery"
    ],
    answer: "tomato",
    userAnswer: ""
  },
  {
    question: "How many teeth does the average adult human have?",
    choices: [
      32,
      26,
      18,
      24
    ],
    answer: 32,
    userAnswer: ""
  },
  {
    question: "Which of the following films was directed by James Cameron?",
    choices: [
      "Ready Player One",
      "The Terminator",
      "Big Fish",
      "Adventures of Tintin"
    ],
    answer: "The Terminator",
    userAnswer: ""
  },
  {
    question: "Which of the drinks below traditionally has more than two ingredients?",
    choices: [
      "Screwdriver",
      "Mimosa",
      "Old Fashioned",
      "Martini"
    ],
    answer: "Old Fashioned",
    userAnswer: ""
  },
  {
    question: "What is in the center of a Blow-Pop?",
    choices: [
      "Chocolate",
      "Gum",
      "Caramel",
      "The stick"
    ],
    answer: "Gum",
    userAnswer: ""
  },
  {
    question: "What is Mark Twain's real name?",
    choices: [
      "Samuel Clemens",
      "Jackson Andrews",
      "Benjamin Davis",
      "Donald Smith"
    ],
    answer: "Samuel Clemens",
    userAnswer: ""
  },
  {
    question: "What did the crocodile swallow in Peter Pan?",
    choices: [
      "Alarm clock",
      "Captain Hook's hook",
      "Fairy dust",
      "Rufio"
    ],
    answer: "Alarm clock",
    userAnswer: ""
  },
  {
    question: "Which is the largest ocean?",
    choices: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    answer: "Pacific",
    userAnswer: ""
  }
]

// create run function
function run() {
  // clear interval
  clearInterval(timer);

  // restart interval
  timer = setInterval(decrement, 1000);

  // print current time to page
  $("#timer").text(`Time Remaining: ${currentTime}`);

  // hide start-quiz button
  $("#start-quiz").hide()
}

// create decrement function to lower counter by one every second
function decrement() {
  counter = counter - 1000;

  // convert the counter to time and print to page
  currentTime = timeConverter(counter);

  // print to page
  $("#timer").text(`Time Remaining: ${currentTime}`);

  // when counter === 0, run stop function
  if (counter === 0) {
    stop();

    alert(`You ran out of time!`);
  }
}

function timeConverter(t) {
  var minutes = Math.floor((t / 1000) / 60);
  var seconds = (t / 1000) - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  };

  if (minutes === 0) {
    minutes = "00"
  };

  return minutes + ":" + seconds

};

// Create quiz creation function for each question in the quiz bank
function renderQuiz() {
  // clear #quiz-form div
  $('#quiz-form').empty();
  
  // loop through quizBank array
  quizBank.forEach(function (question, index) {
    // create div to hold question
    var $question = $('<div>').addClass('form-group');

    // add question to div
    var $label = $("<h4>")
      .text(question.question)
      .appendTo($question);

    // shuffle answer choices
    question.choices = question.choices.sort(function() {
      return .5 - Math.random();
    });

    // create a loop to iterate through quizBank's choices and create radio buttons for each one
    for (var i = 0; i < question.choices.length; i++) {
      // create a div for choice and add bootstrap classes
      var $choice = $('<div>').addClass('form-check form-check-inline');

      // create an input tag for radio buttons
      var $radio = $('<input>');

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
      var $choiceLabel = $('<label>');
      $choiceLabel
        .text(question.choices[i])
        .addClass('form-check-label')
        .appendTo($choice);

      // add whole radio button to question
      $choice.appendTo($question);

    };

    // add question to page
    $question.appendTo($("#quiz-form"));

  });
};

// create a "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
$("#quiz-form").on("change", ".form-check-input", function() {
  // Get question index out of "name" attribute so we know what question you answered
  var questionIndex = $(this).attr("name")

  // get value out of radio button you selected
  var answer = $(this).val()

  // set answer to quizBank's userAnswer property
  quizBank[questionIndex].userAnswer = answer

});

$("#start-quiz").on("click", function() {
  renderQuiz();
  run();
})

 

// Create submit button 
  // create an <input> element
  // add attribute "type" with a value of "submit"
  // add classes "btn btn-primary"
  // append to $quiz
  

// Create stop function
  // Check attribute "data-truth", if val() === true --> correct++
  // Calculate incorrect --> 10 - correct
  // Create $results <div>
  
  // CORRECT
  // Create $correct <h2> element
  // Add text that reads `Correct: ${correct}`
  // Append $correct to $results
  
  // INCORRECT
  // Create $incorrect <h2> element
  // Add text that reads `Incorrect: ${correct}`
  // Append $incorrect to $results

  // MESSAGE
  // Create $message <h3> element
  // if correct >= 7,
    // add text "You know a lot of useless random trivia"
    // append $message to $results
  // else
    // add text "You have some things to learn"
    // append $message to $results

// If count === 0, run stop function
// If submit button clicked, run stop function
  