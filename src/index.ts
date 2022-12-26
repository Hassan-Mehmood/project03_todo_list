#! /usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";
import Todo from "./Todo.js";
import TodoList from "./TodoList.js";

const menuChoices = [
  "Add a new todo",
  "Remove a todo",
  "Check Todo list",
  "Exit",
];

const list = new TodoList();

async function main() {
  const { menuChoice } = await inquirer.prompt({
    name: "menuChoice",
    message: "Select an option",
    type: "rawlist",
    choices: menuChoices,
  });

  if (menuChoice === menuChoices[0]) {
    addNewTodo();
  } else if (menuChoice === menuChoices[1]) {
    remonveTodo();
  } else if (menuChoice === menuChoices[2]) {
    list.printTodoList();
    main();
  } else {
    exit(0);
  }
}

async function remonveTodo() {
  const { index } = await inquirer.prompt({
    name: "index",
    message: "Enter Todo index to remove",
    type: "input",
    validate: (input: string) => {
      if (input === "") {
        return "Please enter a valid index";
      } else {
        return true;
      }
    },
  });

  list.removeTodo(index);
  main();
}

async function addNewTodo() {
  const { name, description } = await inquirer.prompt([
    {
      name: "name",
      message: "Enter Todo name",
      type: "input",
      validate: (input: string) => {
        if (input === "") {
          return "Please enter a valid name";
        } else {
          return true;
        }
      },
    },
    {
      name: "description",
      message: "Enter Todo description",
      type: "input",
      validate: (input: string) => {
        if (input === "") {
          return "Please enter a valid description";
        } else {
          return true;
        }
      },
    },
  ]);
  const todo = new Todo(name, description);
  list.addTodo(todo);
  main();
}
main();
