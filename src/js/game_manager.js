document.body.style.overflow = 'hidden';// на случай изменение количества по высоте
window.addEventListener('load', startGame);

const amountLines = 4; // можно менять, но не решена проблема высоты элементов,
const amountСolumns = 4; // они могут не влезть в окно

let indexGoblin = null;

export default function startGame() {
  const board = document.querySelector('.board');
  createItemBoard(board); // прорисовали поле
  generateGoblin();
}

function createItemBoard(board) { // прорисовка поля
  for (let i = 0; i < amountLines; i += 1) {
    const tr = document.createElement('tr');
    board.appendChild(tr);
    for (let j = 0; j < amountСolumns; j += 1) {
      const item = document.createElement('td');
      tr.appendChild(item);
      item.classList.add('board-item');
    }
  }
  return board;
}

function clearAll() { // убирает класс гоблин там где он есть
  const elements = document.getElementsByTagName('td');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].className = 'board-item';
  }
}

function generateGoblin() {
  const elements = document.getElementsByTagName('td');
  const indNew = Math.floor(Math.random() * elements.length);

  if (indNew === indexGoblin) {
    generateGoblin();
  } else {
    indexGoblin = indNew;
    elements[indNew].classList.add('goblin');
  }
}

setInterval(() => {
  clearAll();
  generateGoblin();
}, 1000);
