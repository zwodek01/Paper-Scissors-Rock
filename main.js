const buttonsArray = document.querySelectorAll('#btn');
const result = document.querySelector('.result');
const computerChoose = document.querySelector('.computer');
const yourPoints = document.querySelector('.your-points');
const computerPoints = document.querySelector('.computer-points');
const clearButton = document.querySelector('.clear');
const chooseArray = ['Scissors', 'Paper', 'Rock'];

function computerChoice() {
  return chooseArray[Math.floor(Math.random() * chooseArray.length)];
}

let counterPlayer = localStorage.getItem('ResultPlayer');
let counterComputer = localStorage.getItem('ResultComputer');

buttonsArray.forEach(button => button.addEventListener('click', () => {
  buttonsArray.forEach(button => button.classList.remove('active'));
  button.classList.add('active');

  const resultComputer = computerChoice();

  result.innerHTML = "";

  if (button.dataset.option === resultComputer) {

    computerChoose.innerHTML = `Computer choose: ${resultComputer}`;
    result.innerHTML = "Result: Draw";

  } else if ((button.dataset.option === "Scissors" && resultComputer === "Paper") ||
    (button.dataset.option === "Paper" && resultComputer === "Rock") ||
    (button.dataset.option === "Rock" && resultComputer === "Scissors")) {

    computerChoose.innerHTML = `Computer choose: ${resultComputer}`;
    result.innerHTML = "Result: You Win";
    yourPoints.innerHTML = `Your points: ${++counterPlayer}`;
    localStorage.setItem('ResultPlayer', `${counterPlayer}`)

  } else {

    computerChoose.innerHTML = `Computer choose: ${resultComputer}`;
    result.innerHTML = "Result: You Lose";
    computerPoints.innerHTML = `Computer points: ${++counterComputer}`;
    localStorage.setItem('ResultComputer', `${counterComputer}`)

  }
}))

if (localStorage.getItem('ResultComputer') === null) {
  computerPoints.innerHTML = "Computer points: 0";
} else {
  computerPoints.innerHTML = `Computer points: ${localStorage.getItem('ResultComputer')}`;
}

if (localStorage.getItem('ResultPlayer') === null) {
  yourPoints.innerHTML = "Your points: 0";
} else {
  yourPoints.innerHTML = `Your points: ${localStorage.getItem('ResultPlayer')}`;
}

clearButton.addEventListener('click', () => {
  localStorage.clear();
  yourPoints.innerHTML = "Your points: 0";
  computerPoints.innerHTML = "Computer points: 0";
  counterComputer = "0";
  counterPlayer = "0";
  buttonsArray.forEach(button => button.classList.remove('active'));
})