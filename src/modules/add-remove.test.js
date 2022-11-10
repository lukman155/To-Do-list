/** @jest-environment jsdom */
import render from './add-remove.js';
import '@testing-library/jest-dom';
// import { save } from './storage.js';
// import { save, tasks } from './storage.js';

beforeEach(() => {
  document.body.innerHTML = `
    <ul class='todo-List'></ul>`;
  const tasks = [{
    description: 'test',
    completed: false,
    index: 1,
  }];
  render(tasks);
});

test('Check addTodo able add todo to todoList', () => {
  const todoList = document.querySelector('.todo-List');

  expect(todoList.children.length).toBe(1);
});
