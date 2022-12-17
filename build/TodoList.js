class TodoList {
    todoList;
    constructor() {
        this.todoList = [];
    }
    addTodoList(item) {
        this.todoList.push(item);
    }
    removeTodoList(item) {
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
