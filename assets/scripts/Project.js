import Item from "./item.js";

export default class Project extends Item {
    constructor(title, description, dueDate) {
        super(title, description, dueDate)
        this.todos = []
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id != todoId)
    }
    updatedTodo(todoId, todo) {
        let oldTodo = this.todos.find(todo => todo.id == todoId)
        oldTodo.update(todo)
    }

    update = (project) => {
        this.title = project.title
        this.description = project.description
        this.dueDate = project.dueDate
    }

}