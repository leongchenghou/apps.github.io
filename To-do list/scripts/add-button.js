document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

document.querySelector('.js-add-button-plus')
  .addEventListener('click', () => {
    addTodo();
  });

document.querySelector('.js-task-input')
  .addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
      addTodo();
    }
  });

function addTodo() {
  const inputElement = document.querySelector('.js-task-input');
  const textInside = inputElement.value;

  todoList.push({
    task: textInside,
    complete: false
  });
  inputElement.value = '';
  makeTodoList();
}