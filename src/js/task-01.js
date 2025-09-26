const categories = document.querySelector('#categories');
console.log(categories);
const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const listItems = categories.children;
console.log(listItems);
for (const listItem of listItems) {
  console.log(`Category: ${listItem.firstElementChild.textContent}`);
  console.log(`Elements: ${listItem.lastElementChild.children.length}`);
  console.log(`Product of category: ${listItem.lastElementChild.textContent}`);
}
