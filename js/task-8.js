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
  inputEl: document.querySelector('#controls>input'),
  btnRender: document.querySelector('#controls>button[data-action="render"]'),
  btnDestroy: document.querySelector('#controls>button[data-action="destroy"]'),
  boxesEl: document.querySelector('#boxes'),
};

let numberOfBoxes = 0;

refs.btnRender.addEventListener('click', createBoxes);

function createBoxes() {
  numberOfBoxes = refs.inputEl.value;
  console.log(numberOfBoxes);

  let boxInitialWidth = 30;
  let boxInitialHeight = 30;

  function randColor() {
    var r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }

  for (let i = 0; i < numberOfBoxes; i++) {
    let box = document.createElement('div');
    box.style.width = boxInitialWidth + [i] * 10 + 'px';
    console.log(box.style.width);
    box.style.height = boxInitialHeight + [i] * 10 + 'px';
    box.style.backgroundColor = randColor();
    refs.boxesEl.append(box);
  }
}

refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}
