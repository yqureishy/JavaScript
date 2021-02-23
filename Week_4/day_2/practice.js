let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let fullName = document.getElementById("fullName")
let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", function() {
    fullName.innerHTML = firstName.value + "," + lastName.value
})