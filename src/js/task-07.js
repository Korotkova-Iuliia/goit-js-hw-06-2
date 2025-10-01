const inputRangeEl = document.querySelector('#font-size-control');
const spanRangeEl = document.querySelector('#text');

const min = Number(inputRangeEl.min) || 16;
const max = Number(inputRangeEl.max) || 96;

inputRangeEl.addEventListener('input', onInputFontSizeChange);

function onInputFontSizeChange(e) {
  const value = e ? Number(e.currentTarget.value) : Number(inputRangeEl.value);
  spanRangeEl.style.fontSize = `${value}px`;
  const ratio = (value - min) / (max - min);
  const r = Math.round(255 * (1 - ratio));
  const g = Math.round(130 * ratio);
  const b = Math.round(130 * ratio);
  spanRangeEl.style.color = `rgb(${r}, ${g}, ${b})`;
}
onInputFontSizeChange();
