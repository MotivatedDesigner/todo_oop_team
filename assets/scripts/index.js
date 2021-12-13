import Controller from "./Controller.js"
import StorageManager from "./StorageManager.js"
import UserInterface from "./UserInterface.js"
import Project from "./Project.js"
import Todo from "./Todo.js"

const controller = new Controller(new UserInterface, new StorageManager);

controller.showProjects()

document.getElementById('add-project').addEventListener('click', () => {
  document.getElementById('add-project-modal').classList.add('show')
})

document.getElementById('project-save').addEventListener('click', () => { 
  
  const title = document.getElementById('input-project-title').value
  const description = document.getElementById('input-project-description').value
  const dueDate = document.getElementById('input-project-dueDate').value
  // Validation
  controller.addProject(new Project(title, description, dueDate))

})

document.getElementById('clear-projects').addEventListener('click', controller.clearProjects)
console.log('before',controller.projects)

window.onbeforeunload = () => {console.log('doo');controller.saveProjects()}

console.log('after',controller.projects)