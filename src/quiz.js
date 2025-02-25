class Quiz {
  // YOUR CODE HERE
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  shuffleQuestions() {
    // const newShuffle = [];
    // const temporaryShuffle = this.questions;
    // for (let i = this.questions.length - 1; i >= 0; i--) {
    //   const randomIndex = Math.floor(Math.random() * i);
    //   newShuffle.push(temporaryShuffle[randomIndex]);
    //   temporaryShuffle.splice(randomIndex, 1);
    // }
    this.questions.sort(() => 0.5 - Math.random());
  }
  checkAnswer(answer) {
    // console.log(this.questions[this.currentQuestionIndex]);
    if (this.questions[this.currentQuestionIndex].answer === answer) {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
    return true;
  }
  filterQuestionsByDifficulty(difficulty) {
    if( !(typeof(difficulty) !== 'number' || difficulty < 1 || difficulty > 3) ){
      this.questions = this.questions.filter( question => question.difficulty === difficulty);
    }
  }
  averageDifficulty() {
    console.log(this);
    console.log(this.questions);
    // const sumOfDifficulty = this.questions.reduce(
    //   (acc, currentQuestion) =>  {
    //     console.log("acc : ", acc);
    //     console.log("currentDifficulty : ", currentQuestion);
    //     return acc + currentQuestion.difficulty
    //   },
    //   0
    // );
    const sumOfDifficulty = this.questions.reduce(
      (acc, currentQuestion) => acc + currentQuestion.difficulty,
      0
    );
    const average = sumOfDifficulty / this.questions.length;
    return average;
  }
}

