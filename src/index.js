import './style.css';

const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.form');
const taskInput = document.querySelector('.task-input');

const tasks = JSON.parse(localStorage.getItem('task.lists')) || [];

class NewTask {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const render = () => {
  clearList(todoList);
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    todoList.appendChild(listItem);

    const div = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', `${task.index}`);
    checkbox.classList.add('task-status');
    div.appendChild(checkbox);

    const label = document.createElement('label');
    label.classList.add('task-desc');
    label.textContent = task.description;
    label.setAttribute('for', `${task.index}`);
    div.appendChild(label);

    const button = document.createElement('button');
    button.innerHTML = '&#8942;';
    button.classList.add('more-icon');

    listItem.appendChild(div);
    listItem.appendChild(button);
  });
};

const save = () => {
  localStorage.setItem('task.lists', JSON.stringify(tasks));
};

const saveRender = () => {
  save();
  render();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDesc = taskInput.value;
  const index = tasks.length;
  if (taskDesc == null || taskDesc === '') return;
  const createTask = new NewTask(taskDesc, index);
  tasks.push(createTask);
  taskInput.value = null;
  saveRender();
});

render();