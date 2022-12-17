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
      console.log(this.todoList);
    }

    console.log("No Todo's in the list");
  }
}

export default TodoList;
