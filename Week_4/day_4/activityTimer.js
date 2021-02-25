
let btnStart = document.getElementById("btnStart")
let textBox = document.getElementById("textBox")
let header = document.getElementById("header")

btnStart.addEventListener("click", function(){


    counter = textBox.value
    let intervalID = window.setInterval(function(){
        counter --
        header.innerHTML = `${counter}`

        if(counter == 0) {
            window.clearInterval(intervalID)
        }

    },1000)

})
