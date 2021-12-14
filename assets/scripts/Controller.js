import Project from "./Project.js"

export default class Controller {
  constructor(userInterface, storageManager) {
    this.userInterface = userInterface
    this.storageManager = storageManager
    
    this.projects = storageManager.getProjects()
    this.currentProject = null
  }

  showProjects = () => this.userInterface.displayAll('project', this.projects)

  showProject = (projectId) =>  {
    let project = this.projects.find( project => project.id ==  projectId)
    this.userInterface.showProject(this.currentProject = project)
    // Object.setPrototypeOf(this.currentProject, Project.prototype)
  }

  updateProject = (project) =>  {
    this.currentProject.update(project)
    this.userInterface.updateProject(project)
  }

  removeProject = () =>  {
    this.projects = this.projects.filter( project => project.id != this.currentProject.id )
    this.currentProject = null
    this.userInterface.clearProject()
  }

  addItem = (type, item) =>  {
    if(type === 'project')
      this.projects.push(item)
    else
      this.currentProject.todos.push(item)
    console.log(`item`, item)
    this.userInterface.addItem(type, item)
  }

  clearProjects = () =>  {
    this.projects = []
    this.currentProject = null
    this.userInterface.clearAll('project')
  }

  clearTodos = () =>  {
    this.currentProject.todos = []
    this.userInterface.clearAll('todos')
  }

  updateTodo = (todoId, todo) =>  {
    let oldTodo = this.currentProject.todos.find( todo => todo.id == todoId )
    oldTodo.update(todo)
    this.userInterface.updateTodo(todo)
  }

  removeTodo = (todoId) =>  {
    this.currentProject.todos = this.currentProject.todos.filter( todo => todo.id != todoId )
    this.userInterface.removeTodo(todoId)
  }

  clearTodos = () =>  {
    this.currentProject.todos = []
    this.userInterface.clearAll('todo')
  }

  toggleTodoCompleted = (todoId) => {
    let todo = this.currentProject.todos.find( todo => todo.id == todoId )
    todo.completed = !todo.completed
    this.userInterface.updateTodo(todoId, oldTodo)

    let notCompletedTodos = this.currentProject.todos.find( todo => todo.completed == false )
    if(notCompletedTodos == undefined) this.setProjectCompleted(true)
    else this.setProjectCompleted(false)
  }
  setProjectCompleted = (completed) => {
    this.currentProject.completed = completed
    this.userInterface.updateProject(projectId, this.currentProject)
  }

  saveProjects = () => this.storageManager.setProjects(this.projects)

}