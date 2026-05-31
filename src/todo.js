const todos = [];

function addTodo(task) {
  todos.push(task);
}

function getTodos() {
  return todos;
}

module.exports = { addTodo, getTodos };