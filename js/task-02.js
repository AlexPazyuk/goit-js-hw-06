const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
const listItems = ingredients.map(ingredients => {
  const li = document.createElement('li');
  li.textContent = ingredients;
  li.classList.add('item');
  return li;
});

list.append(...listItems);
