let form = document.getElementById('form')
let textInput = document.getElementById('textInput')
let msg = document.getElementById('msg')
let dateInput = document.getElementById('dateInput')
let textArea = document.getElementById('textArea')
let tasks = document.getElementById('tasks')
let add = document.getElementById('add')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    formValidation()


})
// form validation 

let formValidation = () => {
    if (textInput.value === '') {
        msg.innerText = 'Task can not be blank'

    }
    else {

        acceptData()
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();

        msg.innerText = ''

    }
}
let data = {}
//  accecp and store data 
let acceptData = () => {

    data.taskName = textInput.value
    data.description = textArea.value
    data.date = dateInput.value
    createTask(data);

}
const createTask = (data) => {

    tasks.innerHTML +=
        ` <div>
    <span class="fw-bold"> ${data.taskName}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i  data-bs-toggle="modal"
        data-bs-target="#form" onClick='editTask(this)' class="fa-solid fa-pen-to-square"></i>
        <i onClick='deleteTask(this)' class="fa-solid fa-trash-can"></i>
    </span>

</div>`

    //   Reset  Data fields 

    textInput.value = '';
    dateInput.value = ''
    textArea.value = ''

}
let deleteTask = (el) => {
    let element = (el.parentElement.parentElement)
    element.remove()

}
let editTask = (el) => {
    let element = el.parentElement.parentElement
    textInput.value = element.children[0].innerText
    dateInput.value = element.children[1].innerText
    textArea.value = element.children[2].innerText
    element.remove()

}







