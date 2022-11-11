/** @jest-environment jsdom */
import { editInput, clearButton } from './interactive.js';
import '@testing-library/jest-dom';

describe('render', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <ul class='todo-List'>
    <li class='list-item'>
        <input type='checkbox' id='1' class='task-status' checked>
        <label class='task-desc1' for='1'>test</label>
        <button class='more-icon 1'>&#8942;</button>
        <button class='more-icon del-btn disappear'>&#128465;</button>
    </li>
    <li class='list-item'>
        <input type='checkbox' id='2' class='task-status' >
        <label class='task-desc2' for='2'>test</label>
        <button class='more-icon 2'>&#8942;</button>
        <button class='more-icon del-btn disappear'>&#128465;</button>
    </li>
    </ul>`;
  });
  const tasks = [{
    description: 'test',
    completed: false,
    index: 1,
  },
  {
    description: 'test',
    completed: false,
    index: 2,
  }];
  test('Check addTodo able add todo to todoList', () => {
    editInput(tasks);
    expect(document.querySelector('.task-desc1').innerHTML).toBe('test-working');
  });

  test('Check addTodo able add todo to todoList', () => {
    const todoList = document.querySelector('.todo-List');
    clearButton(tasks);
    expect(todoList.children.length).toBe(1);
  });
});