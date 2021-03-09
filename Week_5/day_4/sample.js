// http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ef0fd9866ca027e0dca474cee84c53be&units=imperial

let weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=d19d629f689bf144eebc7b0b3aee7004&units=imperial'

// let request = new XMLHttpRequest

// request.addEventListener('load', function (){

// object = JSON.parse(this.responseText)
// console.log(object)
// })

// request.open('GET', weatherURL)
// request.send()

// fetch(weatherURL)
// .then(function(response){
//     console.log(response.json())
// })

function getAllPosts(onPostLoaded){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        return response.json()
    }).then((posts)=>{
        onPostLoaded(posts)
    })

}

getAllPosts(function(posts){
    console.log(posts)
})