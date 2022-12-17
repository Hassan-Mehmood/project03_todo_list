import crypto from "crypto";
class Todo {
    name;
    description;
    complete;
    id = crypto.randomBytes(16).toString("hex"); // This is used to generate random id for each todo in our todolist
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.complete = false;
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
    get getComplete() {
        return this.complete;
    }
    set setComplete(complete) {
        this.complete = complete;
    }
}
export default Todo;
