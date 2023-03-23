const readline = require('readline');

const questions = [
  {
    question: "Which is not programing language?",
    options: ["A. C++", "B. Java", "C. Excel"],
    answer: "C"
  },
  {
    question: "Which is a domestic animal?",
    options: ["A. Hen", "B. Lion", "C. Tiger"],
    answer: "A"
  },
  {
    question: "What is the founder of computer?",
    options: ["A. Charles Babbage", "B. Elon Musk", "C. Jeff bezos"],
    answer: "A"
  },
  {
    question: "What is the line devide earth into two equal parts?",
    options: ["A. Straight line", "B. Equator", "C. Greenwhich mediane"],
    answer: "B"
  }
];

const randomiser = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


randomiser(questions);

let score = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let i = 0;
function askQuestion() {
  if (i < questions.length) {
    const q = questions[i];

   
    console.log(` ${i+1}. ${q.question}`);
    for (let j = 0; j < q.options.length; j++) {
      console.log(q.options[j]);
    }

    
    rl.question("Choose right answer : ", (answer) => {

      if (answer.toUpperCase() === q.answer) {
        console.log("your choice is Correct!");
        score++;
      } else {
        console.log("Your choice is Incorrect!");
      }
      console.log();

      
      i++;
      askQuestion();
    });
  } else {
    
    let perc = (score/questions.length)*100;
    console.log(`End of quiz! Your score ${score} / ${questions.length}`);
    console.log(`you got ${perc}%`);
   
    rl.close();
  }
}


askQuestion();