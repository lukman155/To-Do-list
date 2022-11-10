/** @jest-environment jsdom */
import render, { removeTodo } from './add-remove.js';
import '@testing-library/jest-dom';

describe('render', () => {
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
});

describe('render', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class='todo-List'></ul>`;
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
    render(tasks);
  });

  test('Check addTodo', () => {
    const todoList = document.querySelector('.todo-List');

    expect(todoList.children.length).toBe(2);
  });
});

describe('removeTodo', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class='todo-List'>
        <li class='list-item'>
          <div>
            <input type='checkbox' id='1' class='task-status'>
            <label class='task-desc' for='1'>test</label>
          </div>
          <button class='more-icon'>&#8942;</button>
          <button class='more-icon del-btn disappear'>&#128465;</button>
        </li>
      </ul>`;
    const button = document.querySelector('.more-icon');
    const tasks = [{
      description: 'test',
      completed: false,
      index: 1,
    }];
    removeTodo(button, tasks[0]);
  });

  test('Check removeTodo able remove todo from todoList', () => {
    const todoList = document.querySelector('.todo-List');

    expect(todoList.children.length).toBe(0);
  });
});