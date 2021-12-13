export default class Controller {
  constructor(userInterface, storageManager) {
    this.userInterface = userInterface
    this.storageManager = storageManager
    this.projects = storageManager.getProjects()
    this.currentProject = null
  }

  showProjects = () =>  this.userInterface.displayProjects(this.projects)

  showProject = (projectId) =>  {
    let project = this.projects.find( project => project.id ==  projectId)
    this.userInterface.showProject(project)
    this.currentProject = project
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

  addProject = (project) =>  {
    this.projects.push(project)
    this.userInterface.addProject(project)
  }

  
  clearProjects = () =>  {
    this.projects = []
    this.currentProject = null
    this.userInterface.clearAll('project')
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
  
}