const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value === '') {
        alert('boş bırakılamaz');
        return;
    }

    todoList.innerHTML += `<li>
        <div class="view">
        <input class="toggle" type="checkbox">
        <label class="todoLabel">${todoInput.value}</label>
        <button class="destroy"></button>
        </div>

    </li>`;

    todoInput.value = '';


    bindClicks();

}

todoForm.addEventListener('submit', addTodo);

{/* <input class="edit" value="${todoInput.value}"> */}

function markTodo() {
    this.parentElement.parentElement.classList.toggle('completed');
}

function illuminateTodo(){
    this.parentElement.parentElement.remove();
}

for (const filter of document.querySelectorAll('.filters input')) {
    filter.addEventListener('click', function(){

        todoList.classList.value = 'todo-list ' + this.value;
    });
}


function bindClicks() {
    for (const btn of document.querySelectorAll('.destroy')) {
        btn.addEventListener('click', illuminateTodo);
    }

    for (const btn of document.querySelectorAll('.toggle')) {
        btn.addEventListener('click', markTodo);
    }
}

const silinecek = document.querySelector(".clear");
silinecek.addEventListener("click",wholeIlluminate);
function wholeIlluminate(){
    for (const el of document.querySelectorAll("li.completed")) {
        el.remove();
    }
}