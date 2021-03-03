const emailTextBox = document.getElementById("emailTextBox")
const coffeetypeTextBox = document.getElementById("coffeetypeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const priceTextBox = document.getElementById("priceTextBox")
const orderButton = document.getElementById("orderButton")

orderButton.addEventListener('click', () => {
const order = {
    email: emailTextBox.value,
    type: coffeetypeTextBox.value,
    size: sizeTextBox.value,
    price: parseFloat(priceTextBox.value)

}

submitOrder(order)

})

function submitOrder(order){

fetch ('https://troubled-peaceful-hell.glitch.me/orders', {
method: 'POST',
headers: {
    "Content-Type":"application/json"

},
body:JSON.stringify(order)
}).then(response => response.json())

}


