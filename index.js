let form = document.getElementById('form')
let textInput = document.getElementById('textInput')

form.addEventListener('submit', function (e) {
    e.preventDefault()


})
let formValidation = () => {
    if (textInput.value === '') {
        console.log('failure')
    }
    else {
        console.log('success')
    }
}

