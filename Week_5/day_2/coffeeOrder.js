let coffeeUL = document.getElementById("coffeeUL")
let coffeeEmail = document.getElementById("coffeeEmail")
let coffeeType = document.getElementById("coffeeType")
let coffeeSize = document.getElementById("coffeeSize")
let coffeePrice = document.getElementById("coffeePrice")
let orderButton = document.getElementById("orderButton")
let searchOrders = document.getElementById("searchOrders")
let searchButton = document.getElementById("searchButton")
let orderUL = document.getElementById("orderUL")
let coffeeOrder = document.getElementById("coffeeOrder")
let deleteButton = document.getElementById("deleteButton")
let deleteOrders = document.getElementById("deleteOrders")

// GETS ORDER//
function listOrder(){
    return `<b>E-mail: ${result.email}</b>
                <p>Size: ${result.size}</p>
                <p>Type: ${result.type}</p>
                <p>Price: $${result.price}</p>`
}

let request = new XMLHttpRequest();
request.open("GET", "https://troubled-peaceful-hell.glitch.me/orders/")
request.send()

request.addEventListener("load", function () {
  let result = JSON.parse(this.responseText)

  orders = result.map(function (order) {
    return ` 
        <li> 
       
            <p>E-mail: ${order.email}</p>
            <p>Type: ${order.type}</p>
            <p>Size: ${order.size}</p>
            <p> Price: $${order.price}</p>
        </li> `
  })

  coffeeUL.innerHTML = orders.join("")
})


// POSTS ORDER//
orderButton.addEventListener("click", function(){

    let email = coffeeEmail.value
    let type = coffeeType.value
    let size = coffeeSize.value
    let price = coffeePrice.value

    const requestParams = {

        email: email,
        type: type,
        size: size,
        price: parseFloat(price)

    }


let postRequest = new XMLHttpRequest()

    postRequest.addEventListener('load', function(){

        console.log(this.responseText)

    })

postRequest.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
postRequest.setRequestHeader('Content-Type', 'application/json')
postRequest.send(JSON.stringify(requestParams))
})

// SEARCHES FOR ORDER//

searchButton.addEventListener("click", function(){

    let searchEmail = deleteOrders.value


    let searchRequest = new XMLHttpRequest();

    searchRequest.addEventListener("load", function () {
        result = JSON.parse(this.responseText)
        

        order = listOrder

    coffeeOrder.innerHTML = order


    })

    searchRequest.open("GET",`https://troubled-peaceful-hell.glitch.me/orders/${searchEmail}`)
    searchRequest.send();
})

// DELETES ORDER//

deleteButton.addEventListener("click", function(){

    let deleteEmail = deleteOrders.value


    let deleteRequest = new XMLHttpRequest();

    deleteRequest.addEventListener("load", function () {
        result = JSON.parse(this.responseText)
        
        order = listOrder

    })

    deleteRequest.open("Delete",`https://troubled-peaceful-hell.glitch.me/orders/${deleteEmail}`)
    deleteRequest.send();
})
