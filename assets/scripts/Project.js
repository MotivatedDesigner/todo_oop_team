import Item from "./item.js";

export default class Project extends Item {
    constructor(title, description, dueDate) {
        super(title, description, dueDate)
        this.todos = []
    }
}