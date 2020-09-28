// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const textEl = document.querySelector('#text');
console.log(textEl);

// inputEl.setAttribute('min', 8);
// inputEl.setAttribute('max', 32);
// inputEl.setAttribute('step', 2);

inputEl.addEventListener('input', function () {
  textEl.style.fontSize = inputEl.value + 'px';
});
