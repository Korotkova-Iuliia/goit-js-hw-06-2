const inputNumberEl = document.querySelector('#controls [type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

inputNumberEl.addEventListener('input', onTakeNumber);
btnCreate.addEventListener('click', onCreateClick);
btnDestroy.addEventListener('click', destroyBoxes);

let amount = 1;

function onTakeNumber(e) {
  const value = Number(e.currentTarget.value);

  if (value >= 1 && value <= 100) {
    amount = value;
  } else {
    alert('Введите число от 1 до 100');
  }
}
function onCreateClick(e) {
  destroyBoxes();
  createBoxes(amount);
  inputNumberEl.value = '';
}

function createBoxes(amount) {
  const arrayBoxes = [];
  let side = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const numer = i + 1;
    const newBox = `<div style="background-color:${color}; width: ${side}px; height: ${side}px">${numer}</div>`;

    arrayBoxes.push(newBox);
    side += 10;
  }
  boxesEl.insertAdjacentHTML('beforeend', arrayBoxes.join(''));
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
