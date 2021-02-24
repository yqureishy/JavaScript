var textBoxFirstName = document.getElementById("textBoxFirstName")
var textBoxLastName = document.getElementById("textBoxLastName")
var btnSubmit = document.getElementById("btnSubmit")
var statement = document.getElementById("statement")

btnSubmit.addEventListener("click", function(){
    var firstName = textBoxFirstName.value
    var lastName = textBoxLastName.value

    statement.innerHTML = `Hello, ${firstName} ${lastName}`
})