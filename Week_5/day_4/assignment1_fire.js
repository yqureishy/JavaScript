const taskNameTextBox = document.getElementById("taskNameTextBox")
const taskPriorityTextBox = document.getElementById("taskPriorityTextBox")
const addTaskButton = document.getElementById("addTaskButton")
const tasksUL = document.getElementById("tasksUL")

addTaskButton.addEventListener("click", function() {

    const taskName = taskNameTextBox.value 
    const priority = taskPriorityTextBox.value 
    
    // add function automatically creates a 
    // unique document id for each inserted document 
    db.collection("grocery")
        .add({
            name: taskName, 
            priority: priority
    }).then(function(docRef) {
        getAllTasks() 
    })
})

function getAllTasks() {

    // clear the contents of the task UL 
    tasksUL.innerHTML = ""

    db.collection("grocery")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                let taskItem = `<li>
                                   <p> ${data.name}</p>
                                <i>${data.priority}</i>
                </li>`
                tasksUL.insertAdjacentHTML('beforeend', taskItem)
            })
        })
}

getAllTasks() 