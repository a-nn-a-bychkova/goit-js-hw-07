// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = document.getElementById('value');
console.log(counterValue.textContent);
let counter = Number(counterValue.textContent);
console.log(counter);

const decreseButton = document.querySelector(
  '#counter button[data-action="decrement"]',
);

const increseButton = document.querySelector(
  '#counter button[data-action="increment"]',
);

decreseButton.addEventListener('click', updateAmountDecrese);
increseButton.addEventListener('click', updateAmountIncrese);

function updateAmountDecrese() {
  counter -= 1;
  console.log(counter);
  counterValue.textContent = counter;
}

function updateAmountIncrese() {
  counter += 1;
  console.log(counter);
  counterValue.textContent = counter;
}

// counterValue.textContext = counter;

//   increseButton.onclick = function () {
//     counterValue = parseInt(counterValue) + 1;
//   };

//   decreseButton.onclick = function () {
//    counterValue = parseInt(counterValue) - 1
//   };
//   console.log(counterValue);
//   return counterValue;
// }
