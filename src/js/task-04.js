const btnDecrementEl = document.querySelector(
  `#counter [data-action="decrement"]`
);
const btnIncrementEl = document.querySelector(
  `#counter [data-action="increment"]`
);
const valueEl = document.querySelector(`#value`);

let counterValue = 0;

btnDecrementEl.addEventListener('click', handleClickDecrement);
btnIncrementEl.addEventListener('click', handleClickIncrement);

function handleClickDecrement() {
  console.log(counterValue);
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function handleClickIncrement() {
  console.log(counterValue);
  counterValue += 1;
  valueEl.textContent = counterValue;
}
