const allCategories = document.querySelectorAll('.item h2');
const allCategoriesQuantity = allCategories.length;
console.log(`В списке ${allCategoriesQuantity} категории`);

const allCategoriesEl = document.querySelectorAll('.item');

allCategoriesEl.forEach(category => {
  const categoryName = category.querySelector('h2').innerHTML;

  const subCategoriesQuantity = category.querySelectorAll('li.item li').length;

  console.log(
    `Категория: ${categoryName}\n Количество элементов: ${subCategoriesQuantity}`,
  );
});

// console.log(
//   `Категория: ${categoryName}\nКоличество элементов: ${subCategoriesQuantity}`,
// );
