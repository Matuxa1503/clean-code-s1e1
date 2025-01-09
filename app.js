// Create item
let createTask = function (str) {
  let li = document.createElement('li');
  li.classList.add('list__item');

  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  let p = document.createElement('p');
  p.classList.add('list__p');
  p.innerText = str;

  let editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.classList.add('list__edit-input');
  editInput.classList.add('input');
  let editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('btn');

  let btnImg = document.createElement('img');
  btnImg.classList.add('list__btn-del');
  btnImg.src = './remove.svg';

  li.appendChild(checkBox);
  li.appendChild(p);
  li.appendChild(editInput);
  li.appendChild(editBtn);
  li.appendChild(btnImg);
  return li;
};

function addItemTodo(item) {
  const todoList = document.querySelectorAll('.list__content')[1];
  todoList.appendChild(item);
}

function addItem() {
  const inputAddItem = document.getElementById('new-item');
  const btnAdd = document.querySelector('.btn');

  btnAdd.addEventListener('click', () => {
    if (inputAddItem.value) {
      const newItem = createTask(inputAddItem.value);
      addItemTodo(newItem);
      inputAddItem.value = '';
    }
  });
}

function updateTask(li) {
  li.children[1].textContent = li.children[2].value;
}

function todo() {
  const rowTodo = document.querySelectorAll('.list__row')[1];
  const rowComplet = document.querySelector('.list__row_third');

  // check, update and delete item
  rowTodo.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        e.target.checked = true;
        rowComplet.append(e.target.parentNode);
        e.target.parentNode.children[1].classList.add('completed');
      }
    }

    if (e.target.className === 'list__btn-del') {
      e.target.parentNode.remove();
    }

    if (e.target.className === 'btn') {
      const parent = e.target.parentNode;
      parent.children[1].classList.toggle('disactive');
      parent.children[2].classList.toggle('active');

      if (parent.children[2].classList.contains('active')) {
        parent.children[2].value = parent.children[1].textContent;
        parent.children[3].textContent = 'Save';
      } else {
        updateTask(e.target.parentNode);
        parent.children[3].textContent = 'Edit';
      }
    }
  });
}

function completed() {
  const rowComplet = document.querySelector('.list__row_third');
  const rowTodo = document.querySelectorAll('.list__row')[1];

  rowComplet.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      if (!e.target.checked) {
        e.target.checked = false;
        rowTodo.append(e.target.parentNode);
        e.target.parentNode.children[1].classList.remove('completed');
      }
    }

    if (e.target.className === 'list__btn-del') {
      e.target.parentNode.remove();
    }

    if (e.target.className === 'btn') {
      const parent = e.target.parentNode;
      parent.children[1].classList.toggle('disactive');
      parent.children[2].classList.toggle('active');

      if (parent.children[2].classList.contains('active')) {
        parent.children[2].value = parent.children[1].textContent;
        parent.children[3].textContent = 'Save';
      } else {
        updateTask(e.target.parentNode);
        parent.children[3].textContent = 'Edit';
      }
    }
  });
}

addItem();
todo();
completed();
