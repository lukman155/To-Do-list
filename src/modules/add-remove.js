import { tasks, save } from './storage.js';

const removeTodo = (button) => {
  button.parentElement.remove();
};

const render = (tasks) => {
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const div = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', `${task.index}`);
    checkbox.classList.add('task-status');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
      const ind = tasks.indexOf(task);
      tasks[ind].completed = e.target.checked;
    });

    div.appendChild(checkbox);
    const editInput = document.createElement('input');
    const delBtn = document.createElement('button');

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
      listItem.classList.add('yellow-tag');
      delBtn.classList.remove('disappear');
      label.classList.add('disappear');
      editInput.classList.remove('disappear');
    });

    delBtn.innerHTML = '&#128465;';
    delBtn.classList.add('more-icon');
    delBtn.classList.add('del-btn');
    delBtn.classList.add('disappear');
    delBtn.addEventListener('click', () => {
      delBtn.classList.remove('disappear');
      removeTodo(delBtn, task);
    });

    editInput.type = 'text';
    editInput.classList.add('edit-input');
    editInput.classList.add('disappear');
    editInput.value = task.description;

    editInput.addEventListener('change', (e) => {
      const ind = tasks.indexOf(task);
      tasks[ind].description = e.target.value;

      editInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          window.location.reload();
        }
      });

      document.addEventListener('click', (e) => {
        const desc = Array.from(listItem.querySelectorAll('*'));
        if (!desc.includes(e.target)) {
          window.location.reload();
        }
      });
    });

    listItem.appendChild(div);
    listItem.appendChild(editInput);
    listItem.appendChild(button);
    listItem.appendChild(delBtn);

    const todoList = document.querySelector('.todo-List');
    todoList.appendChild(listItem);
  });
};

const saveRender = () => {
  save();
  render(tasks);
};

export { removeTodo };
export default render;
export { saveRender };