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