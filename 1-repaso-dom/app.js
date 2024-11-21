const addButton = document.querySelector("#add-button");
const todoInput = document.querySelector("#todo-input");
const todosContainer = document.querySelector("#todos-container");
const form = document.querySelector("#create-todo-form");


let todos = ["sacar al perro", "hacer el super"];

function submitHandler(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    if (todoText === "") {
        alert("Por favor ingresa un to do");
        return;
    }
    
    todos.push(todoText);
    console.log(todos)

    renderTodos();
    todoInput.value = "";

}

function deleteHandler(event) {
    const itemToDelete = event.target.parentNode;
    console.log(itemToDelete)
    // todosContainer.removeChild(itemToDelete)

    const textToDelete = itemToDelete.querySelector("span")
    console.log(textToDelete)

    const newTodos = [];

    // debugger

    for (let i = 0; i < todos.length; i ++) {
        if(textToDelete !== todos[i]) {
            newTodos.push(todos[i]);
        }
    }

    console.log(newTodos);

    todos = newTodos;

    console.log(todos)
    renderTodos()


}

function renderTodos() {
    todosContainer.innerHTML = "";

    for( let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement("div");

        const todoContent = document.createElement("span");
        todoItem.textContent = todos[i];

        const button = document.createElement("button");
        button.textContent = "delete";

        button.addEventListener("click", deleteHandler)

        todoItem.appendChild(todoContent);
        todoItem.appendChild(button);

        todosContainer.appendChild(todoItem);
    }
}

form.addEventListener("submit", submitHandler);

renderTodos();