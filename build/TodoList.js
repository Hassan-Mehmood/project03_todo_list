class TodoList {
    todoList;
    constructor() {
        this.todoList = [];
    }
    addTodo(item) {
        this.todoList.push(item);
    }
    removeTodo(index) {
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
