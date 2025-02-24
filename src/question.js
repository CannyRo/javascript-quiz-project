class Question {
  // YOUR CODE HERE
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  shuffleChoices() {
    const shuffleArray = [];
    const temporaryArray = this.choices;
    for (let i = this.choices.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      shuffleArray.push(temporaryArray[randomIndex]);
      temporaryArray.splice(randomIndex, 1);
    }
  }
}
