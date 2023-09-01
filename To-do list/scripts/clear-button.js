const yesButton = document.querySelector('.js-yes-button');
const noButton = document.querySelector('.js-no-button');

document.querySelector('.js-column-b').addEventListener('click', () => {
  document.querySelector('.js-column-c').classList.add('column-c-space');
  yesButton.innerHTML = 'Yes';
  noButton.innerHTML = 'No';
});

document.querySelector('.js-yes-button').addEventListener('click', removedCompleted);

document.querySelector('.js-no-button').addEventListener('click', () => {
  yesButton.innerHTML = '';
  noButton.innerHTML = '';
  document.querySelector('.js-column-c').classList.remove('column-c-space');
});

function removedCompleted() {
  const uncompletedArray = todoList.filter((item) => item.complete === false)
  todoList = uncompletedArray;
  completedTodolist();

  yesButton.innerHTML = '';
  noButton.innerHTML = '';
  document.querySelector('.js-column-c').classList.remove('column-c-space');
} 