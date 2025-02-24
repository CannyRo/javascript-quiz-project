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
    const newShuffle = [];
    const temporaryShuffle = this.questions;
    for (let i = this.questions.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      newShuffle.push(temporaryShuffle[randomIndex]);
      temporaryShuffle.splice(randomIndex, 1);
    }
  }
  checkAnswer(answer) {
    console.log(this.questions[this.currentQuestionIndex]);
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
}
