const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.getElementById('ingredients');
const container = [];

ingredients.forEach(ingredient => {
  const ingredientsNode = document.createElement('li');
  const textIngredient = document.createTextNode(ingredient);
  ingredientsNode.appendChild(textIngredient);
  container.push(ingredientsNode);
});
ul.append(...container);
