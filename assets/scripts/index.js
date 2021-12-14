import Controller from "./Controller.js"
import StorageManager from "./StorageManager.js"
import UserInterface from "./UserInterface.js"
import Project from "./Project.js"
import Todo from "./Todo.js"

const controller = new Controller(new UserInterface, new StorageManager);
const addProjectModal = document.getElementById('add-project-modal')

controller.showProjects()

document.getElementById('add-project').addEventListener('click', () => { addProjectModal.classList.add('show') })

document.getElementById('project-save').addEventListener('click', () => { 
  const title = document.getElementById('input-project-title').value
  const description = document.getElementById('input-project-description').value
  const dueDate = document.getElementById('input-project-dueDate').value
  controller.addProject(new Project(title, description, dueDate))
  addProjectModal.classList.remove('show')
})

document.getElementById('clear-projects').addEventListener('click', controller.clearProjects)
document.getElementById('clear-todos').addEventListener('click', controller.clearTodos)

document.getElementById('project-list').addEventListener('click', (event) => {
  if(event.target.tagName == 'LI') controller.showProject(event.target.id)
})

document.getElementById('todo-input-add').addEventListener('click', () => {
  console.log('fdf')
  const title = document.getElementById('todo-input-title')
  controller.currentProject.addTodo( new Todo(title) )
})

window.onbeforeunload = controller.saveProjects