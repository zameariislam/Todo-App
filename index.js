let form = document.getElementById('form')
let textInput = document.getElementById('textInput')
let msg = document.getElementById('msg')
let dateInput = document.getElementById('dateInput')
let textArea = document.getElementById('textArea')

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
    console.log(data)



}

