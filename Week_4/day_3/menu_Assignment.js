let menuUL = document.getElementById("menuUL")
let selectCourses = document.getElementById("selectCourses")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("desserts")
let starters = document.getElementById("starters")

let courseNames = ["Starters", "Entrees", "Desserts"]



for(let index=0; index < dishes.length; index++) {
    let dish = dishes[index]
    let dishItem = `
    <li>
        <b> ${dish.title}<b> <span> $${dish.price}</span>
        <Blockquote> <i> ${dish.description}<i> </Blockquote>
        <img id = "image" src ="${dish.imageURL}"</img>
        <br>
        <br>
        <br>
    </li>
    `

menuUL.insertAdjacentHTML('beforeend',dishItem)
}

let entreesCourse = dishes.filter(function(dish){
    return dish.course == "Entrees"
})

let dessertsCourse = dishes.filter(function(dish){
    return dish.course == "Desserts"
})

let startersCourse = dishes.filter(function(dish){
    return dish.course == "Starters"
})

// for(index=0; index <)

function getSelectedCourse()
{menuUL.innerHTML = ""
var selectedValue = document.getElementById("selectCourses").value




if (selectedValue === "Entrees"){
  for(let index=0; index < entreesCourse.length; index++) {
    let dish = entreesCourse[index]
    let entreesItem = `
    <li>
        <b> ${dish.title}<b> <span> $${dish.price}</span>
        <Blockquote> <i> ${dish.description}<i> </Blockquote>
        <img id = "image" src ="${dish.imageURL}"</img>
        <br>
        <br>
        <br>
    </li>
    `  
    menuUL.insertAdjacentHTML('beforeend',entreesItem)
}
}
}

function getSelectedCourse()
{menuUL.innerHTML = ""
var selectedValue = document.getElementById("selectCourses").value
console.log(selectedValue)

if (selectedValue === "Desserts"){
  for(let index=0; index < dessertsCourse.length; index++) {
    let dish = dessertsCourse[index]
    let dessertsItem = `
    <li>
        <b> ${dish.title}<b> <span> $${dish.price}</span>
        <Blockquote> <i> ${dish.description}<i> </Blockquote>
        <img id = "image" src ="${dish.imageURL}"</img>
        <br>
        <br>
        <br>
    </li>
    `  
    menuUL.insertAdjacentHTML('beforeend',dessertsItem)
}
}
}