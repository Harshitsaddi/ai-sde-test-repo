const { readTodos, writeTodos } = require('./fileStorage');

let todos = readTodos();

function addTodo(task) {
  todos.push(task);
  writeTodos(todos);
}

function getTodos() {
  return todos;
}

module.exports = { addTodo, getTodos };
