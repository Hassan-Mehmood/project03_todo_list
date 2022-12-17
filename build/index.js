import inquirer from "inquirer";
import Todo from "./Todo.js";
import TodoList from "./TodoList.js";
// const TodoList: Todo[] = [];
const menuChoices = [
    "Add a new todo",
    "Remove a todo",
    "Check Todo list",
    "Exit",
];
const list = new TodoList();
async function main() {
    let loop = true;
    while (loop) {
        const { menuChoice } = await inquirer.prompt({
            name: "menuChoice",
            message: "Select an option",
            type: "rawlist",
            choices: menuChoices,
        });
        switch (menuChoice) {
            case menuChoices[0]:
                addNewTodo();
                break;
            case menuChoices[1]:
                console.log("Case 2");
                break;
            case menuChoices[2]:
                console.log("Case3");
                break;
            default:
                loop = false;
                break;
        }
    }
}
async function addNewTodo() {
    const { name, description } = await inquirer.prompt([
        {
            name: "name",
            message: "Enter Todo name",
            type: "input",
            validate: (input) => {
                if (input === "") {
                    return "Please enter a valid name";
                }
                else {
                    return true;
                }
            },
        },
        {
            name: "description",
            message: "Enter Todo description",
            type: "input",
            validate: (input) => {
                if (input === "") {
                    return "Please enter a valid description";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    const todo = new Todo(name, description);
    list.addTodoList(todo);
}
main();
