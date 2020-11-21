var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute('data-index', i)
    var button = document.createElement('button')
    button.innerText = 'Complete'
    li.appendChild(button)
    todoList.appendChild(li);
    }
}

function addTodo(event) {
    event.preventDefault()
    //get todoInput value
    var newTodo = todoInput.value

    if (newTodo !== '') {
        todos.push(newTodo)
        todoInput.value = null
        renderTodos()
    }
    //push value into todos

}

todoForm.addEventListener('submit', addTodo)

renderTodos()