const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../todos.json');

function readTodos() {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading todos:', error);
    return [];
  }
}

function writeTodos(todos) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error writing todos:', error);
  }
}

module.exports = { readTodos, writeTodos };
