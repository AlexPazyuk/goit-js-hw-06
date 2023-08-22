const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  list.append(listItem);
  
}
document.body.appendChild(list);