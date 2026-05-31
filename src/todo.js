const todos = [];

function addTodo(task, dueDate) {
  todos.push({ task, dueDate: new Date(dueDate) });
}

function getTodos() {
  return todos;
}

function getSortedTodos() {
  return [...todos].sort((a, b) => a.dueDate - b.dueDate);
}

module.exports = { addTodo, getTodos, getSortedTodos };
