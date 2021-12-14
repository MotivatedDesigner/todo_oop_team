import Project from "./Project.js";
import createdProject from "./Project.js";
document.getElementById('add-project').addEventListener('click', () => {
    document.getElementById('add-project-modal').classList.add('show')
})
document.getElementById('clear-projects').addEventListener('click', () => {
        console.log("clear")

        clearList()
    })
    // const clearButton = document.getElementById('clear-projects');
const save = document.getElementById('project-save')
let title = document.getElementById('project-title')
let desc = document.getElementById('project-description')
let date = document.getElementById('project-dueDate')
let ul = document.querySelector('.projects-list')
save.addEventListener('click', () => {
    console.log('cliked')
    let note = title.value
    let note2 = desc.value
    let note3 = date.value
    create()
})

function inputLength(input) {
    return input.value.length;
}

function create() {
    if (inputLength(title) == 0) {
        alert('you should fill the input')
    } else {
        let textTitle = document.createTextNode(title.value)
        let textDesc = document.createTextNode(desc.value)
        let datevalue = document.createTextNode(date.value)

        let li = document.createElement('li')
        let ul = document.querySelector('.projects-list')
        let aside = document.getElementById('Project-list')
        li.appendChild(textTitle)
            // li.appendChild(textDesc)
            // li.appendChild(datevalue)
        ul.appendChild(li)
        aside.appendChild(ul)

        title.value = ""
        desc.value = ""
        date.value = ""

        ////delete
        let deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class', 'btn')
        deleteBtn.appendChild(document.createTextNode('X'))
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            console.log('delete')
            deleted()
        })

        function deleted() {
            li.remove()
        }
    }



}

function clearList() {
    // while (list.firstChild) {
    ul.remove()
        // }
}

// addProject(todo) {
//     const list = document.getElementById('Project-list')

//     const row = document.createElement('li')

//     row.innerHTML =
//         `<li>${Project.title}</li>
//     <li>
//         <a href="#" class="btn btn-danger btn-sm delet">X</a>
//     </li>`
// }