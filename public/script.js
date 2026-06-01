// Calculator Logic
const calcInput1 = document.getElementById('calcInput1');
const operation = document.getElementById('operation');
const calcInput2 = document.getElementById('calcInput2');
const calculateBtn = document.getElementById('calculateBtn');
const calcResult = document.getElementById('calcResult');

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(calcInput1.value);
    const num2 = parseFloat(calcInput2.value);
    const op = operation.value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        calcResult.textContent = 'Please enter valid numbers.';
        return;
    }

    switch (op) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }
    calcResult.textContent = result;
});

// Todo List Logic
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const getTodosBtn = document.getElementById('getTodosBtn');
const todoListOutput = document.getElementById('todoListOutput');

addTodoBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        addTodo(task);
        todoInput.value = '';
        renderTodos();
    }
});

getTodosBtn.addEventListener('click', renderTodos);

function renderTodos() {
    const currentTodos = getTodos();
    todoListOutput.innerHTML = '';
    if (currentTodos.length === 0) {
        todoListOutput.innerHTML = '<li>No todos yet!</li>';
    } else {
        currentTodos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo;
            todoListOutput.appendChild(li);
        });
    }
}

// Capitalize Utility Logic
const capitalizeInput = document.getElementById('capitalizeInput');
const capitalizeBtn = document.getElementById('capitalizeBtn');
const capitalizeResult = document.getElementById('capitalizeResult');

capitalizeBtn.addEventListener('click', () => {
    const text = capitalizeInput.value;
    capitalizeResult.textContent = capitalize(text);
});

// Initial render for todos
renderTodos();
