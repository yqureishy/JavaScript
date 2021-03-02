const stocksUL = document.getElementById("stocksUL")

const request = new XMLHttpRequest()
request.open('GET','https://endurable-bead-polo.glitch.me/stocks')
request.send()
request.addEventListener('load',function(){

    let result = JSON.parse(this.responseText)

    console.log(result)

    stocks = result.map(function(stock){
        console.log(stock.symbol)
        return `<li>
                    <b> ${stock.title} </b>
                    <p> ${stock.symbol} </p>
                    <p> $${stock.price} </p>
                    <p> ${stock.quantity} </p>
                    <p> ${stock.quantity * stock.price} </p>

                </li>
        
        `
    })

    stocksUL.innerHTML = stocks.join("")
    
})