let todoList = JSON.parse(localStorage.getItem('todolist')) ||
  [{
    task: 'Add your first task!!!',
    complete: false
  }];
if (todoList.length === 0) {
  todoList = [{
    task: 'Add your first task!!!',
    complete: false
  }];
}
makeTodoList();

function makeTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { task, complete } = todoObject;
    let html = '';
    if (complete === false) {
      html = `
        <button class="check-button js-check-button"></button>
        <div class="task js-task-${index}">${task}</div>
        <button class="delete-button js-delete-button">&#10060;	
        </button>
      `;
    }
    else {
      html = `
      <button class="check-button js-check-button">
        <button class="inner-button"></button>
      </button>
      <div class="task js-task-${index} underlined">${task}</div>
      <button class="delete-button js-delete-button">&#10060;	
      </button>
    `;
    }
    todoListHTML += html;
  });

  document.querySelector('.todo-grid')
    .innerHTML = todoListHTML;

  checkButton();
  removeTodo();
  localStorage.setItem('todolist', JSON.stringify(todoList));
}

function checkButton() {
  document.querySelectorAll('.js-check-button')
    .forEach((checkButton, index) => {
      checkButton.addEventListener('click', () => {
        let task = document.querySelector(`.js-task-${index}`);
        isUnderlined(checkButton, task, index);
        localStorage.setItem('todolist', JSON.stringify(todoList));
      });
    });
}

function removeTodo() {
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        makeTodoList();
      });
    });
}

function isUnderlined(checkButton, task, index) {
  if (todoList[index].complete === false) {
    checkButton.innerHTML = '<button class="inner-button"></button>';
    task.classList.add('underlined');
    todoList[index].complete = true;
  }
  else {
    task.classList.remove('underlined');
    checkButton.innerHTML = '';
    todoList[index].complete = false;
  }
}