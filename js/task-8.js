// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  controlsEl: document.querySelector('#controls'),

  inputEl: document.querySelector('#controls>input'),
  btnRender: document.querySelector('#controls>button[data-action="render"]'),
  btnDestroy: document.querySelector('#controls>button[data-action="destroy"]'),
};

const boxesEl = document.querySelector('#boxes');
let numberOfBoxes = 0;

refs.btnRender.addEventListener('click', onRenderClick);

function onRenderClick() {
  // const box = boxesEl.createEl('div');
  numberOfBoxes = refs.inputEl.value;
  console.log(numberOfBoxes);
  const allBoxes = [];

  function appendNCopies(n, original, appendTo) {
    const box = boxesEl.createEl('div');
    for (const i = 0; i < n; i += 1) {
      const divClone = box.cloneNode(true);
      allBoxes.push(divClone);

      // let clone = original.cloneNode(true);
      // allBoxes.push(clone);
      // appendTo.appendChild(allBoxes);
      // console.log(appendTo);
    }
  }
  appendNCopies(numberOfBoxes, box, boxesEl);
}

const allBoxes = [];

refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
// refs.boxesEl.children.classList.add('box');

// btnRender.addEventListener('click', onRenderClick);

// onRenderClick
