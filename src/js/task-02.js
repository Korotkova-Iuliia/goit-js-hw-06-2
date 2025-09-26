const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const ingredientItem = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  (li.textContent = ingredient), console.log(ingredient);
  return li;
});
ingredientList.append(...ingredientItem);
