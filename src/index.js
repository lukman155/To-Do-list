import './style.css'

const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.form')
const taskInput = document.querySelector('.task-input')

let tasks = [{description:'Pls Work', completed:false, index:0}, 
            {description:'Pele Work', completed:false, index:1}]

class NewTask {
    constructor(description, index) {
        this.description = description;
        this.completed = false;
        this.index = index;
    }
}
            

form.addEventListener('submit', e => {
    e.preventDefault()
    let taskDesc = taskInput.value
    let index = tasks.length
    if (taskDesc == null || taskDesc === '') return
    const createTask = new NewTask(taskDesc, index)
    tasks.push(createTask)
    taskInput.value = null
    render()
})


const render = () => {
    clearList(todoList);
    tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    todoList.appendChild(listItem);

    const div = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', `${task.index}`)
    checkbox.classList.add('task-status');
    div.appendChild(checkbox);

    const label = document.createElement('label');
    label.classList.add('task-desc');
    label.textContent = task.description;
    label.setAttribute('for', `${task.index}`)
    div.appendChild(label);

    const button = document.createElement('button')
    button.innerHTML = '&#8942;'
    button.classList.add('more-icon')


    listItem.appendChild(div);
    listItem.appendChild(button)
    })
}


const clearList = list => {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
render()