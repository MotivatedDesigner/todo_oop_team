import uuidv4 from "./uuid.js"

export default class Item {
  constructor(title, description, dueDate) {
    this.id = uuidv4()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.completed = false
  }

  getId = () => this.id

  setTitle = (title) => (this.title = title)
  getTitle = () => this.title

  setDescription = (Description) => (this.Description = Description)
  getDescription = () => this.Description

  setDueDate = (dueDate) => (this.dueDate = dueDate)
  getDueDate = () => this.dueDate

  setCompleted = (completed) => (this.completed = completed)
  getCompleted = () => this.completed
}
