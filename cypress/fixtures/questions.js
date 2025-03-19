const mockQuestions = [
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", isCorrect: false }, // Button "1"
      { text: "Indian Ocean", isCorrect: false }, // Button "2"
      { text: "Pacific Ocean", isCorrect: true },  // Button "3" (Correct Answer)
      { text: "Arctic Ocean", isCorrect: false } // Button "4"
    ]
  },
  {
    question: "What is 5 + 5?",
    answers: [
      { text: "10", isCorrect: true },  // Button "1" (Correct Answer)
      { text: "15", isCorrect: false }, // Button "2"
      { text: "20", isCorrect: false }, // Button "3"
      { text: "25", isCorrect: false } // Button "4"
    ]
  }
];

export default mockQuestions;
