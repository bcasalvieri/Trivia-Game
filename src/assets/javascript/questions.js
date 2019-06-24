class Question {
  constructor(id, question, choices, answer) {
    (this.id = id),
    (this.question = question),
    (this.choices = choices),
    (this.answer = answer),
    (this.userAnswer = "");
  }
}

const question1 = new Question(
  1,
  "Which of the following is not a primary color?",
  ["Green", "Blue", "Yellow", "Red"],
  "Green"
);

const question2 = new Question(
  2,
  "If there are 12 inches in a foot and 3 feet in a yard, how many feet do you have?",
  ["2", "3", "12", "Am I supposed to know this?!"],
  "2"
);

const question3 = new Question(
  3,
  "Which of the following vegetables is botanically considered a fruit?",
  ["Carrot", "Tomato", "Broccoli", "Celery"],
  "Tomato"
);
const question4 = new Question(
  4,
  "How many teeth does the average adult human have?",
  ["32", "26", "18", "24"],
  "32"
);

const question5 = new Question(
  5,
  "Which of the following films was directed by James Cameron?",
  ["Bad Boys", "The Terminator", "Friday", "Space Jam"],
  "The Terminator"
);

const question6 = new Question(
  6,
  "Which of the drinks below traditionally has more than two ingredients?",
  ["Screwdriver", "Mimosa", "Old Fashioned", "Martini"],
  "Old Fashioned"
);

const question7 = new Question(
  7,
  "What is in the center of a Blow-Pop?",
  ["Chocolate", "Gum", "Caramel", "The stick"],
  "Gum"
);

const question8 = new Question(
  8,
  "What is Mark Twain's real name?",
  ["Samuel Clemens", "Jackson Andrews", "Benjamin Davis", "Donald Smith"],
  "Samuel Clemens"
);

const question9 = new Question(
  9,
  "What did the crocodile swallow in Peter Pan?",
  ["Alarm clock", "Captain Hook's hook", "Fairy dust", "Rufio"],
  "Alarm clock"
);

const question10 = new Question(
  10,
  "Which is the largest ocean?",
  ["Atlantic", "Pacific", "Indian", "Arctic"],
  "Pacific"
);

const question11 = new Question(
  11,
  "If you pass the second-place runner in a race, what place are you in?",
  ["First", "Second", "Third", "I would never run in a race!"],
  "Second"
);

const question12 = new Question(
  12,
  "The person who did the voice for Yoda also is the voice for which other character?",
  ["Miss Piggy", "Elmo", "Elmer Fudd", "Count Dracula"],
  "Miss Piggy"
);

const question13 = new Question(
  13,
  "Who was the first civilian to own a Hummer?",
  ["Arnold Schwarzenegger", "LeBron James", "Bill Gates", "Jay-Z"],
  "Arnold Schwarzenegger"
);

const question14 = new Question(
  14,
  "Who was the first President to be born at a hospital?",
  ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "Richard Nixon"],
  "Jimmy Carter"
);

const question15 = new Question(
  15,
  "If you walk south from Detroit, where would you end up first?",
  ["Canada", "Ohio", "Indiana", "Pennsylvania"],
  "Canada"
);

const Quiz = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15
];

export { Quiz };
