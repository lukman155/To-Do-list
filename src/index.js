import './style.css';
import NewTask from './modules/task.js';
import { tasks } from './modules/storage.js';
import {
  todoList, form, taskInput, clearButton,
} from './modules/elements.js';
import { clearList } from './modules/removetask.js';
import render, { saveRender } from './modules/render.js';
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

const removeCompleted = () => {
  clearList(todoList);
  for (let x = 0; x < tasks.length; x += 1) {
    if (tasks[x].completed) {
      tasks.splice(x, 1);
      for (let i = x; i < tasks.length; i += 1) {
        tasks[i].index -= 1;
      }
    }
  }
  saveRender();
};

clearButton.addEventListener('click', removeCompleted);
render();