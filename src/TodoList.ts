import Todo from "./Todo.js";

class TodoList {
  todoList: Todo[];
  constructor() {
    this.todoList = [];
  }

  addTodo(item: Todo) {
    this.todoList.push(item);
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }

  printTodoList() {
    if (this.todoList.length > 0) {
      this.todoList.forEach((todo) => {
        console.log(`
      -------------------------------------
      Name: ${todo.getName}
      Description: ${todo.getDescription}
      Status: ${todo.getstatus}
      -------------------------------------
      `);
      });
    }

    console.log("No Todo's in the list");
  }
}

export default TodoList;
