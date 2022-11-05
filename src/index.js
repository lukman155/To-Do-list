import './style.css';

const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.form');
const taskInput = document.querySelector('.task-input');
const SAVE_LOC = 'task.lists';
const tasks = JSON.parse(localStorage.getItem(SAVE_LOC)) || [];

class NewTask {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const save = () => {
  localStorage.setItem(SAVE_LOC, JSON.stringify(tasks));
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

// Remove Task

const removeTodo = (button, listItem) => {
    button.parentElement.remove();
    const ind = tasks.indexOf(listItem);
    tasks.splice(ind, 1);
    for (let i = ind; i < tasks.length; i += 1) {
      tasks[i].index -= 1;
    }
    localStorage.setItem('task.lists', JSON.stringify(tasks));
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
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
      const ind = tasks.indexOf(task);
      tasks[ind].completed = e.target.checked;
      save();
    });

    div.appendChild(checkbox);

    const label = document.createElement('label');
    label.classList.add('task-desc');
    label.textContent = task.description;
    label.setAttribute('for', `${task.index}`);
    div.appendChild(label);

    const button = document.createElement('button');
    button.innerHTML = '&#8942;';
    button.classList.add('more-icon');
    button.addEventListener('click', () => {
      button.classList.add('disappear');
      listItem.classList.add('yellow-tag')
      delBtn.classList.remove('disappear');

    });

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '&#128465;';
    delBtn.classList.add('more-icon');
    delBtn.classList.add('disappear');
    delBtn.addEventListener('click', () => {
      delBtn.classList.remove('disappear');
      removeTodo(delBtn, task);
    });

    listItem.appendChild(div);
    listItem.appendChild(button);
    listItem.appendChild(delBtn);
  });
};

const saveRender = () => {
  save();
  render();
};

// Add Task

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