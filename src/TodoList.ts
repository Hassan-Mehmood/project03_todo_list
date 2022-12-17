import Todo from "./Todo.js";

class TodoList {
  todoList: Todo[];
  constructor() {
    this.todoList = [];
  }

  addTodoList(item: Todo) {
    this.todoList.push(item);
  }

  removeTodoList(item: Todo) {
    this.todoList.filter((todo) => {
      if (todo.id !== item.id) {
        return true;
      }
      return false;
    });
  }

  printTodoList() {
    // for (let i = 0; i < this.todoList.length; i++) {
    console.log(this.todoList);
    // }
  }
}

export default TodoList;
