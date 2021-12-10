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

let input = element.querySelector('#name');
let btn2 = element.querySelector('#btn2');
let body = element.querySelector('body')
let div = element.querySelector('.elementCreated')

let inputDate = element.querySelector('#date');
let inputDescription = element.querySelector('#description')



let ul = document.createElement('ul')
let li = document.createElement('li')




btn2.addEventListener('click', (e) => {
    e.preventDefault();
    let note = input.value;
    let note2 = inputDate.value;
    let note3 = inputDescription.value;
    createElement(note, note2, note3);
    console.log('clicked')

})

function inputLength(input) {
    return input.value.length;
}

function createElement(value, date, description) {
    if (inputLength(input) == 0) {
        alert("you have to fill the input")
    } else {
        const text = document.createTextNode(input.value)
        const dateValue = document.createTextNode(inputDate.value)
        const description = document.createTextNode(inputDescription.value)

        let li = document.createElement('li')

        li.appendChild(text)
        li.appendChild(dateValue)
        li.appendChild(description)

        ul.appendChild(li)
        div.appendChild(ul)


        window.localStorage.setItem(input.value, inputDescription.value);
        let fromStorage = window.localStorage.getItem(input.value);

        input.value = ""
        inputDate.value = ""
        inputDescription.value = ""

    }
}

function id() {
    ran = (Math.random() * 1000) + 5;
    console.log(ran, Math.floor(ran))
}
class Item {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = uuid.v4()
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
console.log(todo)
let tmp =
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