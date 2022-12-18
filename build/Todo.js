class Todo {
    name;
    description;
    status;
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.status = false;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }
    get getstatus() {
        return this.status;
    }
    set setstatus(status) {
        this.status = status;
    }
}
export default Todo;
