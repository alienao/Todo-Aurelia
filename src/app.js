import { Todo } from "./todo";

export class App {
  constructor() {
    this.message = "Hello World!";
    this.todoList = [];
    this.todoList.push(new Todo("Clean my room"));
    this.todoList.push(new Todo("Walk the dog"));
    this.todoList.push(new Todo("Take out the trash"));
    this.newItem = "";
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = "";
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
