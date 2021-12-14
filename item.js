class Input {
    constructor(title) {
        this.title = title;
    }
}


class Selection {
    constructor() {
        this._select = window.document
    }
    querySelector(value) {
        return this._select.querySelector(value)
    }
    querySelectorAll(value) {
        return this._select.querySelectorAll(value)
    }
    byId(value) {
        return this._select.getElementById(value)
    }
}
let element = new Selection() // instanciation : is to make an instancce of a class

let input = element.querySelector('#title');
let btn2 = element.querySelector('#btn2');
let body = element.querySelector('body')
let div = element.querySelector('.elementCreated')

let inputDate = element.querySelector('#date');
let inputDescription = element.querySelector('#description')
let ul = element.querySelector('#todos')


let li = document.createElement('li')


// btn2.addEventListener('click', (e) => {
//     e.preventDefault();
//     let note = input.value;
//     createElement(note);
//     console.log('clicked')

// })

function inputLength(input) {
    return input.value.length;
}

let checkbox = document.createElement('input');

function createElement(value) {
    if (inputLength(input) == 0) {
        alert("you have to fill the input")
    } else {
        let text = document.createElement('p')
        text.textContent = input.value

        let li = document.createElement('li')

        li.appendChild(text)
        ul.appendChild(li)
        div.appendChild(ul)

        ////////////////////////////////////////////////////////////////
        let liBackground = '#C5C5C5'
        li.style.background = liBackground
        li.style.border = '1px solid black'

        input.value = ""

        /**************************/ //checkbox

        let checkbox = document.createElement('input');
        checkbox.classList.add('form-check-input')
        li.appendChild(checkbox)
        checkbox.type = "checkbox";


        //*******************************change the color */

        checkbox.addEventListener('click',
            function () {
                console.log('checked')
                if (checkbox.checked == true) {
                    // console.log('checked');
                    checkbox.parentElement.style.background = '#00D100';
                } else {
                    checkbox.parentElement.style.background = liBackground;
                }
            }
        )

        ///*******************************edit Icon */

        let editBtn = document.createElement('button')
        editBtn.appendChild(document.createTextNode("edit"));
        li.appendChild(editBtn)


        editBtn.addEventListener('click', () => {
            console.log('edit')
            let promp = prompt('edit your to do', input.value)
            if (promp != null) {
                li.querySelector('p').textContent = promp
            }
        })

        /**************************/ //deleteIcon

        let deleteIcon = document.createElement('button')
        deleteIcon.setAttribute("class", "btn");
        deleteIcon.appendChild(document.createTextNode("X"));
        li.appendChild(deleteIcon);

        deleteIcon.addEventListener("click", () => {
            console.log('click btn dalete')
            deleteItem()
        })

        function deleteItem() {
            li.remove();
        }


    }
}
console.log(checkbox)














function id() {
    ran = (Math.random() * 1000) + 1;
    console.log(ran, Math.floor(ran))
}
class Item {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        // this.id = uuid.v4()
    }

    setTitle(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }

    setDescription(description) {
        return this.description = description
    }
    getDescription() {
        return this.description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    getDueDate() {
        return this.dueDate;
    }

    setCompleted(completed) {
        return this.completed = false;
    }
    getCompleted() {
        return this.completed;
    }
}

class Project extends Item {
    constructor(title, description, dueDate) {
        super(title, description, dueDate);
        this.todos = [];
    }

    addTodos(todos) {
        this.todos.push(todos);
    }

    removeTodos(todoId) {
        this.todoId = this.todos.filter(todo => todo.id != todoId);
    }

    update(todoId, todo) {
        let oldId = this.todoId.find(todo => todo.id == todoId)
        const data = {
            todo,
            ...oldId
        };
        return data
    }

    clearTodos() {
        this.todos.delete(todoId);
    }
}
let todo = new Item()
todo.title = 'fffg'
// console.log(todo)
// let tmp =
class Todo extends Item {
    constructor(title, description, dueDate) {

    }
}

class Storage {
    constructor() {
        this._localStorage = window.localStorage;
    }
    set(key, value) {
        let smth = this.get(key);
        console.log(smth);
        if (smth == null) smth = [];
        smth.push(value);

        this._localStorage.setItem(key, JSON.stringify(smth));
    }


    get(key) {
        return JSON.parse(this._localStorage.getItem(key))
    }

}

// console.log(new Item())