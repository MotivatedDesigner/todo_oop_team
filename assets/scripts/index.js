import Controller from "./Controller.js"
import StorageManager from "./StorageManager.js"
import UserInterface from "./UserInterface.js"
import Project from "./Project.js"
import Todo from "./Todo.js"

const controller = new Controller(new UserInterface, new StorageManager);
const addProjectModal = document.getElementById('add-project-modal')
const editProjectModal = document.getElementById('edit-project-modal')
const editTodoModal = document.getElementById('edit-todo-modal')

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
    controller.removeProject()
  else if(event.target.closest('svg').classList.contains('edit')) {
    editProjectModal.classList.add('show-modal')
    editProjectModal.querySelector('#edit-project-title').value = controller.currentProject.title
    editProjectModal.querySelector('#edit-project-description').value = controller.currentProject.description
    editProjectModal.querySelector('#edit-project-dueDate').value = controller.currentProject.dueDate
  }
})
// Update
document.getElementById('project-edit').addEventListener('click', () => {
  editProjectModal.classList.remove('show-modal')
  const title = editProjectModal.querySelector('#edit-project-title').value
  const description = editProjectModal.querySelector('#edit-project-description').value
  const dueDate = editProjectModal.querySelector('#edit-project-dueDate').value
  controller.updateProject(new Project(title, description, dueDate))
})

/* Todo CRUD */
// Clear all
document.getElementById('clear-todos').addEventListener('click', controller.clearTodos)
// Add
document.getElementById('todo-input-add').addEventListener('click', () => {
  const title = document.getElementById('todo-input-title').value
  controller.addItem('todo', new Todo(title))
})
// Remove & edit & check
document.getElementById('todo-list').addEventListener('click', (event) => {
  if(event.target.closest('svg').classList.contains('remove')) 
    controller.removeTodo(event.target.closest('li').id)
  else if(event.target.closest('svg').classList.contains('check'))
    controller.toggleTodoCompleted(event.target.closest('li').id)
  else if(event.target.closest('svg').classList.contains('edit')) {
    editTodoModal.classList.add('show-modal')
    const todo = controller.getTodo(event.target.closest('li').id)
    editTodoModal.querySelector('#edit-todo-title').value = todo.title
    editTodoModal.querySelector('#edit-todo-description').value = todo.description
    editTodoModal.querySelector('#edit-todo-dueDate').value = todo.dueDate
  }
})
// Update
document.getElementById('todo-edit').addEventListener('click', () => {
  editTodoModal.classList.remove('show-modal')
  const title = editTodoModal.querySelector('#edit-todo-title').value
  const description = editTodoModal.querySelector('#edit-todo-description').value
  const dueDate = editTodoModal.querySelector('#edit-todo-dueDate').value
  controller.updateTodo(new Todo(title, description, dueDate))
})

window.onbeforeunload = controller.saveProjects