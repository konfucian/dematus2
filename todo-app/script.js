// script.js

// Function to save a todo item to localStorage
function saveTodoToLocalStorage(todo) {
    let todos = getTodosFromLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to get todos from localStorage
function getTodosFromLocalStorage() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}

// Function to delete a todo item from localStorage
function deleteTodoFromLocalStorage(todo) {
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(t => t !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Example of how to use these functions
// saveTodoToLocalStorage('Learn JavaScript');
// deleteTodoFromLocalStorage('Learn JavaScript');