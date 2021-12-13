import Item from "./item.js"

export default class Todo extends Item {

    update = (todo) => {
        this.title = todo.title
        this.description = todo.description
        this.dueDate = todo.dueDate
    }

}