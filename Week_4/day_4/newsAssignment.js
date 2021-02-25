let newsUL = document.getElementById("newsUL")

let articles = news.articles.map(function(object){
    return object
})

articles.map(function(items){
    let liItem = `
    <li id="lItem">
        <div id="author"><b>Author: </b> ${items.author}</div>
        <div id="title"><b>Title: </b> ${items.title}</div>
        <div id="description"><b>Description: </b>${items.description}</div>
        <div id="url"> <a href="${items.url}">Click to read more</a></div><br>
        <div id="image"><img src = "${items.urlToImage}" alt="Unavailable" width="400"></div>
        <div id="published"><b>Published At: </b> ${items.publishedAt}</div>
        <br>
        <br>
        <br>
    </li>
    `
newsUL.insertAdjacentHTML('beforeend', liItem)
})

