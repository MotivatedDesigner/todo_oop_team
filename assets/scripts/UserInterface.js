export default class UserInterface {
    constructor() {
      this.todoList = document.getElementById('todo-list')
      this.projectList = document.getElementById('project-list')

      this.projectDiv = document.querySelector('project')
      this.projectTitle = document.getElementById('project-title')
      this.projectDescription = document.getElementById('project-description')
    }

    generateTodoHtml = (todo) => `
      <li id="${todo.id}" ${todo.completed ? 'class="checked"' : ''} >
        ${todo.title}
        <div class="todo-actions">
          <svg class="project-check" aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="clipboard-check" class="svg-inline--fa fa-clipboard-check fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M320 64c-8.844 0-16 7.156-16 16S311.2 96 320 96c17.64 0 32 14.34 32 32v320c0 17.66-14.36 32-32 32H64c-17.64 0-32-14.34-32-32V128c0-17.66 14.36-32 32-32c8.844 0 16-7.156 16-16S72.84 64 64 64C28.7 64 0 92.72 0 128v320c0 35.28 28.7 64 64 64h256c35.3 0 64-28.72 64-64V128C384 92.72 355.3 64 320 64zM112 128h160C280.8 128 288 120.8 288 112S280.8 96 272 96h-24.88C252.6 86.55 256 75.72 256 64c0-35.35-28.65-64-64-64S128 28.65 128 64c0 11.72 3.379 22.55 8.877 32H112C103.2 96 96 103.2 96 112S103.2 128 112 128zM192 32c17.64 0 32 14.36 32 32s-14.36 32-32 32S160 81.64 160 64S174.4 32 192 32zM84.69 299.3l64 64C151.8 366.4 155.9 368 160 368s8.188-1.562 11.31-4.688l128-128c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L160 329.4L107.3 276.7c-6.25-6.25-16.38-6.25-22.62 0S78.44 293.1 84.69 299.3z" fill="currentColor" /> </svg>
          <svg class="project-edit" aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M493.2 56.26l-37.51-37.51C443.2 6.252 426.8 0 410.5 0c-16.38 0-32.76 6.25-45.26 18.75L45.11 338.9c-8.568 8.566-14.53 19.39-17.18 31.21l-27.61 122.8C-1.7 502.1 6.158 512 15.95 512c1.047 0 2.116-.1034 3.198-.3202c0 0 84.61-17.95 122.8-26.93c11.54-2.717 21.87-8.523 30.25-16.9l321.2-321.2C518.3 121.7 518.2 81.26 493.2 56.26zM149.5 445.2c-4.219 4.219-9.252 7.039-14.96 8.383c-24.68 5.811-69.64 15.55-97.46 21.52l22.04-98.01c1.332-5.918 4.303-11.31 8.594-15.6l247.6-247.6l82.76 82.76L149.5 445.2zM470.7 124l-50.03 50.02l-82.76-82.76l49.93-49.93C393.9 35.33 401.9 32 410.5 32s16.58 3.33 22.63 9.375l37.51 37.51C483.1 91.37 483.1 111.6 470.7 124z" fill="currentColor" /> </svg>
          <svg class="project-remove" aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="trash-can" class="svg-inline--fa fa-trash-can fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M432 64h-96l-33.63-44.75C293.4 7.125 279.1 0 264 0h-80C168.9 0 154.6 7.125 145.6 19.25L112 64h-96C7.201 64 0 71.2 0 80c0 8.799 7.201 16 16 16h416c8.801 0 16-7.201 16-16C448 71.2 440.8 64 432 64zM152 64l19.25-25.62C174.3 34.38 179 32 184 32h80c5 0 9.75 2.375 12.75 6.375L296 64H152zM400 128C391.2 128 384 135.2 384 144v288c0 26.47-21.53 48-48 48h-224C85.53 480 64 458.5 64 432v-288C64 135.2 56.84 128 48 128S32 135.2 32 144v288C32 476.1 67.89 512 112 512h224c44.11 0 80-35.89 80-80v-288C416 135.2 408.8 128 400 128zM144 416V192c0-8.844-7.156-16-16-16S112 183.2 112 192v224c0 8.844 7.156 16 16 16S144 424.8 144 416zM240 416V192c0-8.844-7.156-16-16-16S208 183.2 208 192v224c0 8.844 7.156 16 16 16S240 424.8 240 416zM336 416V192c0-8.844-7.156-16-16-16S304 183.2 304 192v224c0 8.844 7.156 16 16 16S336 424.8 336 416z" fill="currentColor" /> </svg>
        <div>
      </li> 
    `
    generateProjectHtml = (project) => `
      <li id="${project.id}" ${project.completed ? 'class="checked"' : ''}>${project.title}</li>
    `

    displayAll = (type, data) => 
      this[`${type}List`].innerHTML = data.map( el => 
        this[`generate${type.charAt(0).toUpperCase() + type.slice(1)}Html`](el) 
      ).join(' ')

    clearProject = () => this.projectDiv.classList.remove('show')

    showProject = (project) => {
      this.projectTitle.innerHTML = project.title
      this.projectDescription.innerHTML = project.description
      this.displayTodos(project.todos)
      if( !this.projectDiv.classList.contains('show') ) this.projectDiv.classList.add('show')
    }

    addProject = (project) => this.projectList.innerHTML += this.generateProjectHtml(project)

    updateProject = (projectId, project) => {
      let html = `<li id="${project.id}">${project.title}</li>`
      document.getElementById(`${projectId}`).innerHTML = html
    }
    removeProject = (projectId) => {
      document.getElementById(`${projectId}`).innerHTML = ''
    }

    displayTodos = (todos) => {
      let html = todos.map(todo => `<li id="${todo.id}">${todo.title}</li>`).join(' ')
      this.todoList.innerHTML = html
    }    
    addTodo = (todo) => {
      let html = `<li id="${todo.id}">${todo.title}</li>`
      this.todoList.innerHTML += html
    }
    updateTodo = (todoId, todo) => {
      let html = `<li class="${ todo.completed ? 'green' : 'gray'}" id="${todo.id}">${todo.title}</li>`
      document.getElementById(`${todoId}`).innerHTML = html
    }
    removeTodo = (todoId) => {
      document.getElementById(`${todoId}`).innerHTML = ''
    }

    clearAll = (type) => this[`${type}List`].innerHTML = ''

}