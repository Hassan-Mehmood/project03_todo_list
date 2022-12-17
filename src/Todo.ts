class Todo {
  name: string;
  description: string;
  complete: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.complete = false;
  }

  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }

  get getDescription() {
    return this.description;
  }
  set setDescription(description: string) {
    this.description = description;
  }

  get getComplete() {
    return this.complete;
  }
  set setComplete(complete: boolean) {
    this.complete = complete;
  }
}

export default Todo;
