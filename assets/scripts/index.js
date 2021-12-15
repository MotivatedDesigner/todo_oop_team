import Controller from "./Controller.js"
import StorageManager from "./StorageManager.js"
import UserInterface from "./UserInterface.js"
import Project from "./Project.js"
import Todo from "./Todo.js"

const controller = new Controller(new UserInterface, new StorageManager);
const addProjectModal = document.getElementById('add-project-modal')

controller.showProjects()

document.getElementById('add-project').addEventListener('click', () => 
  addProjectModal.classList.add('show-modal') 
)

document.getElementById('project-save').addEventListener('click', () => { 
  const title = document.getElementById('input-project-title').value
  const description = document.getElementById('input-project-description').value
  const dueDate = document.getElementById('input-project-dueDate').value
  controller.addItem('project', new Project(title, description, dueDate))
  addProjectModal.classList.remove('show-modal')
})
/* Project CRUD */
// Clear All
document.getElementById('clear-projects').addEventListener('click', controller.clearProjects)
// show
document.getElementById('project-list').addEventListener('click', (event) => {
  if(event.target.tagName == 'LI') controller.showProject(event.target.id)
})
// Remove & edit
document.getElementById('project-actions').addEventListener('click', (event) => {
  if(event.target.closest('svg').classList.contains('remove')) 
    controller.removeProject(event.target.closest('li').id)
  // else if(event.target.closest('svg').classList.contains('edit'))
  //   controller.removeTodo(event.target.closest('li').id)
})

/* Todo CRUD */
// Clear all
document.getElementById('clear-todos').addEventListener('click', controller.clearTodos)
// Add
document.getElementById('todo-input-add').addEventListener('click', () => {
  const title = document.getElementById('todo-input-title').value
  controller.addItem('todo', new Todo(title))
})
// Remove & edit
document.getElementById('todo-list').addEventListener('click', (event) => {
  if(event.target.closest('svg').classList.contains('remove')) 
    controller.removeTodo(event.target.closest('li').id)
  // else if(event.target.closest('svg').classList.contains('edit'))
  //   controller.removeTodo(event.target.closest('li').id)
})

window.onbeforeunload = controller.saveProjects