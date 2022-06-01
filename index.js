let form = document.getElementById('form')
let textInput = document.getElementById('textInput')
let msg = document.getElementById('msg')
let dateInput = document.getElementById('dateInput')
let textArea = document.getElementById('textArea')
let tasks = document.getElementById('tasks')

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
    console.log(data)
    tasks.innerHTML +=
        ` <div>
    <span class="fw-bold"> ${data.taskName}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
    </span>

</div>`

    //   Reset  Data fields 

    textInput.value = '';
    dateInput.value = ''
    textArea.value = ''
}

