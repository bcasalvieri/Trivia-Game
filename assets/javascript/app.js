// create variables
var correct = 0;
var count = 5 * 60 * 1000;

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

// This is huge for looping through an object
// Object.keys(quizBank).forEach(function(key) {
//   console.log(key, quizBank[key].answers)
// })


  // clear interval
  // restart interval
    // function = decrement
    // run every 1 sec

// Create a decrement function
  // subtract 1 from count
  // print count to page
  // if count === 0, run grade quiz function

// STARTER CODE FROM ALEX!
// function to print all questions to page
function renderQuestions() {
  // clear out form
  $("#quiz-form").empty();

  // Loop through questions array
  quizBank.forEach(function (question, index) {
    // create div to hold question
    var $question = $("<div>").addClass("form-group");
    console.log(question.question)
    
    // add question to div
    var $label = $("<h4>")
      .text(question.question)
      .appendTo($question);

    // shuffle choices
    question.choices = question.choices.sort(function() {
      return .5 - Math.random();
    });

    // create a loop to iterate through question's choices and create radio buttons for each one
    for (var i = 0; i < question.choices.length; i++) {
      // create a div for choice and add bootstrap classes
      var $choice = $('<div>');
      $choice.addClass('form-check form-check-inline');
      
      // create an input tag for the radio button
      var $radio = $('<input>');

      // add attributes to provide the answer choice
      // the "name" attribute is super important, all radio buttons per question need to have the same "name" so they know which question it applies to
      $radio
        .attr({
          type: "radio",
          value: question.choices[i],
          name: index,
          class: "form-check-input"
        })
        .appendTo($choice);
      
      // create label to actually print the choice to the page
      var $choiceLabel = $('<label>');
      $choiceLabel
        .text(question.choices[i])
        .addClass('form-check-label')
        .appendTo($choice);
      
      // add whole radio button choice to question
      $choice.appendTo($question);
    }
    // when done making all of the choices, add whole question to the page
    $("#quiz-form").append($question);
  });
}

// create on "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
$("#quiz-form").on("change", ".form-check-input", function() {
  console.log(this);
  
  // GET question index out of "name" attribute so we know what question you answered
  var questionIndex = $(this).attr("name");

  console.log(questions[questionIndex]);

  // get value out of radio button you selected
  var answer = $(this).val();

  // set answer to question's userAnswer property
  questions[questionIndex].userAnswer = answer;
  
});

renderQuestions();



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
  