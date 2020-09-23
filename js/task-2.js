const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.getElementById('ingredients');
// ingredients.forEach(ingredient => {
//   ul.appendChild(
//     document
//       .createElement('li')
//       .appendChild(document.createTextNode(ingredient)),
//   );
// });

ingredients.forEach(ingredient => {
  const ingredientsNode = document.createElement('li');
  const textIngredient = document.createTextNode(ingredient);
  ingredientsNode.appendChild(textIngredient);
  document.getElementById('ingredients').appendChild(ingredientsNode);
});
