const inputEl = document.querySelector('#validation-input');
const validValue = Number(inputEl.dataset.length);
let countInputSignifier = 0;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  countInputSignifier = e.currentTarget.value.length;

  console.log(`countInputSignifier ${countInputSignifier}`);
  console.log(`validValue ${validValue}`);

  inputEl.classList.remove('valid', 'invalid');

  countInputSignifier === validValue
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
  // inputEl.classList.add(
  //   countInputSignifier === validValue ? 'valid' : 'invalid'
  // );
}
