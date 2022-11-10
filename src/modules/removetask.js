import { tasks, save } from './storage.js';

const removeTodo = (button, listItem) => {
  button.parentElement.remove();
  const ind = tasks.indexOf(listItem);
  tasks.splice(ind, 1);
  for (let i = ind; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
  save();
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

export { clearList };
export default removeTodo;