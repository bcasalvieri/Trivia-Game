// create variables
var correct = 0;
var count = 5 * 60 * 1000;

// create quiz bank
var quizBank = {
  question1: {
    question: "Which of the following is not a primary color?",
    answers: [
      "green",
      "blue",
      "yellow",
      "red"
    ],
    correct: "blue",
  },
  question2: {
    question: "What is the answer of 10 / (2 + 3) * 6?",
    answers: [
      12,
      23,
      48,
      0.33
    ],
    correct: 12
  },
  question3: {
    question: "Which of the following vegetables is botanically considered a fruit?",
    answers: [
      "carrot",
      "tomato",
      "broccoli",
      "celery"
    ],
    correct: "tomato"
  },
  question4: {
    question: "How many teeth does the average adult human have?",
    answers: [
      32,
      26,
      18,
      24
    ],
    correct: 32
  },
  question5: {
    question: "Which of the following films was directed by James Cameron?",
    answers: [
      "Ready Player One",
      "The Terminator",
      "Big Fish",
      "Adventures of Tintin"
    ],
    correct: "The Terminator"
  },
  question6: {
    question: "Which of the drinks below traditionally has more than two ingredients?",
    answers: [
      "Screwdriver",
      "Mimosa",
      "Old Fashioned",
      "Martini"
    ],
    correct: "Old Fashioned"
  },
  question7: {
    question: "What is in the center of a Blow-Pop?",
    answers: [
      "Chocolate",
      "Gum",
      "Caramel",
      "The stick"
    ],
    correct: "Gum"
  },
  question8: {
    question: "What is Mark Twain's real name?",
    answers: [
      "Samuel Clemens",
      "Jackson Andrews",
      "Benjamin Davis",
      "Donald Smith"
    ],
    correct: "Samuel Clemens"
  },
  question9: {
    question: "What did the crocodile swallow in Peter Pan?",
    answers: [
      "Alarm clock",
      "Captain Hook's hook",
      "Fairy dust",
      "Rufio"
    ],
    correct: "Alarm clock"
  },
  question10: {
    question: "Which is the largest ocean?",
    answers: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    correct: "Pacific"
  }
}

// This is huge for looping through an object
Object.keys(quizBank).forEach(function() {
  console.log(key, quizBank[key].answers)
})

// Create a start function
  // reset correct and incorrect answers
  // clear content from html
  // print quiz form to html
  // clear interval
  // restart interval
    // function = decrement
    // run every 1 sec

// Create a decrement function
  // subtract 1 from count
  // print count to page
  // if count === 0, run grade quiz function

// Create quiz creation function for each question in the quiz bank
  // create a $quiz <form> element
  // create a $question <div>

  // QUESTION
  // create a <p> tag
  // add class "question"
  // add text from question in object
  // append to $question div

  // ANSWERS
  // create an $answerChoices div
  
  // for each answer in array
    // create an $answer div
    // add class "form-check"
    // create an <input> element
    // add class "form-check-input"
    // add attribute
      // "type" with a value of "radio"
      // "id"" with a value of "answer[i]"
      // "name" with a value of "answer"

    // create a <label> element
    // add class "form-check-label"
    // add attribute "for" with a value of "answer[i]"
    // if answers[i] === correct, add attribute "data-truth" with value "true"
    // add text from answers[i]
    // append $answer to $answerChoices
    
    // append $answerChoices to $question
    // append $question to $quiz
    // append $quiz to #main-content div on HTML

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
  