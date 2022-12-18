class Todo {
  private name: string;
  private description: string;
  private status: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.status = false;
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

  get getstatus() {
    return this.status;
  }
  set setstatus(status: boolean) {
    this.status = status;
  }
}

export default Todo;
