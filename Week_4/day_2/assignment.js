let task = document.getElementById("task")
let submitButton = document.getElementById("submitButton")
let tasksUl = document.getElementById("tasksUl")
let completedUl = document.getElementById("completedUl")

submitButton.addEventListener("click", function() {

    let taskName = task.value 
    let liItem = document.createElement("li")

    liItem.innerHTML = taskName
    tasksUl.appendChild(liItem)

    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        this.parentElement.remove()
        
    })

    let checkBox = document.createElement("input")
    checkBox.type = 'checkbox'
    checkBox.addEventListener("change", function(){
        if(this.checked == true){

            completedUl.appendChild(this.parentElement)
        }
        else {
            tasksUl.appendChild(this.parentElement)
        }
    })

    



    

    liItem.appendChild(removeButton)
    liItem.appendChild(checkBox)
})