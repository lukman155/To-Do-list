import './style.css';
import NewTask from './modules/task.js';
import { save, tasks } from './modules/storage.js';
import {
  todoList, form, taskInput, clearButton,
} from './modules/elements.js';
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

// const removeCompleted = () => {
//   clearList(todoList);
//   for (let x = 0; x < tasks.length; x += 1) {
//     if (tasks[x].completed) {
//       tasks.splice(x, 1);
//       for (let i = x; i < tasks.length; i += 1) {
//         tasks[i].index -= 1;
//       }
//     }
//   }
//   saveRender();
// };

clearButton.addEventListener('click', () => {
  const newlist = tasks.filter((element) => element.completed === true);
  newlist.forEach((element) => {
    if (tasks.includes(element)) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });
  let i = 1;
  tasks.forEach((element) => {
    element.index = i;
    i += 1;
  });
  todoList.innerHTML = '';
  for (let i = 1; i <= tasks.length; i += 1) {
    tasks.forEach((listItem) => {
      if (listItem.index === i) {
        save();
      }
    });
  }
  render(tasks);
});
render(tasks);