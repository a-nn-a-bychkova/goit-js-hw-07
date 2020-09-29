// Напиши скрипт который, при наборе текста
// в инпуте input#name-input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой,в спане должна отображаться строка
// 'незнакомец'.
let nameInput = document.querySelector('#name-input');
console.log(nameInput);
let nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

nameInput.oninput = function () {
  if (nameInput.value.length === 0) {
    nameOutput.innerHTML = 'Незнакомец';
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
};
