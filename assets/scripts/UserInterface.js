export default class UserInterface {
    constructor() {
      this.todoList = document.getElementById('todo-list')
      this.projectList = document.getElementById('project-list')
      this.projectTitle = document.getElementById('project-title')
      this.projectDescription = document.getElementById('project-description')
    }

    displayProjects = (projects) => {
      let html = projects.map(project => `<li id="project-${project.id}">${project.title}</li>`).join(' ')
      this.projectList.innerHTML = html
    }
    clearProject = () => {
      this.projectTitle.innerHTML = ''
      this.projectDescription.innerHTML = ''
      this.todoList.innerHTML = ''
    }
    showProject = (project) => {
      this.projectTitle.innerHTML = project.title
      this.projectDescription.innerHTML = project.description
      this.displayTodos(project.todos)
    }
    addProject = (project) => {
      let html = `<li id="project-${project.id}">${project.title}</li>`
      this.projectList.innerHTML += html
    }
    updateProject = (projectId, project) => {
      let html = `<li id="project-${project.id}">${project.title}</li>`
      document.getElementById(`project-${projectId}`).innerHTML = html
    }
    removeProject = (projectId) => {
      document.getElementById(`project-${projectId}`).innerHTML = ''
    }

    displayTodos = (todos) => {
      let html = todos.map(todo => `<li id="todo-${todo.id}">${todo.title}</li>`).join(' ')
      this.todoList.innerHTML = html
    }    
    addTodo = (todo) => {
      let html = `<li id="todo-${todo.id}">${todo.title}</li>`
      this.todoList.innerHTML += html
    }
    updateTodo = (todoId, todo) => {
      let html = `<li class="${ todo.completed ? 'green' : 'gray'}" id="todo-${todo.id}">${todo.title}</li>`
      document.getElementById(`todo-${todoId}`).innerHTML = html
    }
    removeTodo = (todoId) => {
      document.getElementById(`todo-${todoId}`).innerHTML = ''
    }

    clearAll = (type) => this[`${type}List`].innerHTML = ''

}