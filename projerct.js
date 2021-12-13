import Select from "./Items";
import Item from "./Items";

obj = new Select;

class Project extends Item{

  constructor (title, description, dueDate) {
      super(title, description, dueDate)
      this.todos  = []
  }

  addTodo(todo){
  this.todos.push(todo);
}
removeTodo(string){
    this.todoId = string;
}
updateTodo(string,Todo){
    this.todoId = string;
    this.todo = Todo;

}

clearTodos=()=>{

}

       
       
}

obj2 = new Project;


