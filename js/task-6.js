// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

let validationInput = document.querySelector('#validation-input');

console.log(validationInput.getAttribute('data-length'));

validationInput.onblur = function () {
  let correctLength = parseInt(validationInput.dataset.length);
  let inputDataLength = validationInput.value.length;
  console.log(inputDataLength);

  if (correctLength === inputDataLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.onfocus = function () {
  validationInput.classList.remove('valid');
  validationInput.classList.remove('invalid');
};
