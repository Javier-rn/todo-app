import { v4 as uuidv4 } from 'uuid';

class Folder {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = uuidv4();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

export default Folder;
