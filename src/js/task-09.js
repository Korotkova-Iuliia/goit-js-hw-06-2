const bodyEl = document.body;
const btnChangeColorEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');

init();
btnChangeColorEl.addEventListener('click', onBtnColorClick);

function onBtnColorClick() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${newColor}`;
  nameColorEl.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function init() {
  onBtnColorClick();
}
