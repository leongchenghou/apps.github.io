function completedTodolist() {
  let indexofCompleted = [];
  let completedHTML = '';
  todoList.forEach((todoObject, index) => {
    const { complete } = todoObject;
    if (complete === true) {
      indexofCompleted.push(index);
    }

  });
  indexofCompleted.forEach((value) => {
    let html = '';
    html = `
    <button class="check-button js-check-button-${value}">
      <button class="inner-button"></button>
    </button>
    <div class="task js-task-${value} underlined">${todoList[value].task}</div>
    <div></div>
  `;
    completedHTML += html;
  })

  document.querySelector('.todo-grid')
    .innerHTML = completedHTML;
  editedCheckbutton();
}

function uncompletedTodolist() {
  let indexofUncompleted = [];
  let uncompletedHTML = '';
  todoList.forEach((todoObject, index) => {
    const { complete } = todoObject;
    if (complete === false) {
      indexofUncompleted.push(index);
    }

  });
  indexofUncompleted.forEach((value) => {
    let html = '';
    html = `
    <button class="check-button js-check-button-${value}"></button>
    <div class="task js-task-${value}">${todoList[value].task}</div>
    <div></div>
  `;
    uncompletedHTML += html;
  })

  document.querySelector('.todo-grid')
    .innerHTML = uncompletedHTML;
  editedCheckbutton();
}

function editedCheckbutton() {
  document.querySelectorAll('.check-button')
    .forEach((checkButton) => {
      checkButton.addEventListener('click', () => {
        let className = checkButton.getAttribute("class").split("-");
        let index = className[4];
        let task = document.querySelector(`.js-task-${index}`);
        isUnderlined(checkButton, task, index);
      });
    });
}

let isToggled = 0;
const columnA = document.querySelector('.js-column-a');
const columnB = document.querySelector('.js-column-b');
function performCompletedShowAll() {
  if (isToggled === 0) {
    columnA.innerHTML = 'Uncompleted';
    columnB.innerHTML = 'Clear All Finished Task?';
    columnB.classList.add('column-b-space');
    completedTodolist();
    isToggled = 1;
  } else if (isToggled === 1) {
    columnA.innerHTML = 'Show All';
    columnB.innerHTML = '';
    columnB.classList.remove('column-b-space');
    yesButton.innerHTML = '';
    noButton.innerHTML = '';
    document.querySelector('.js-column-c').classList.remove('column-c-space');
    uncompletedTodolist();
    isToggled = 2;
  } else if (isToggled === 2) {
    columnA.innerHTML = 'Completed';
    columnB.innerHTML = '';
    makeTodoList();
    isToggled = 0;
  }
}

columnA.addEventListener('click', performCompletedShowAll);