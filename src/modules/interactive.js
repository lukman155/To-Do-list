const editInput = (tasks) => {
  const selector = document.querySelector('.task-desc1');
  selector.innerHTML = 'test-working';
  tasks[0].description = 'test-working';
};

const clearButton = (tasks) => {
  const newlist = tasks.filter((element) => element.completed === true);
  newlist.forEach((element) => {
    if (tasks.includes(element)) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });
};

export { clearButton, editInput };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const taskDesc = taskInput.value;
//   const index = tasks.length;
//   if (taskDesc == null || taskDesc === '') return;
//   const createTask = new NewTask(taskDesc, index);
//   tasks.push(createTask);
//   taskInput.value = null;

//   saveRender();
// });