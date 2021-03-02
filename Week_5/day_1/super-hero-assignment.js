
const batmanLink='http://www.omdbapi.com/?s=batman&apikey=a1f0aabb'
const movieDetailLink='http://www.omdbapi.com/?i={movie.imdbID}&apikey=a1f0aabb'
let batmanHeading=document.getElementById("batmanHeading")
let batmanUL=document.getElementById("batmanUL")

let request = new XMLHttpRequest()
request.open('GET', batmanLink)
request.send()

request.addEventListener('load',function(){
    
    let result=JSON.parse(this.responseText)
    let moviesList=result.Search


    let moviesInfo=moviesList.map(function(movie){
            return `
            <div class="section">
                <b class="title">${movie.Title}</b>
                <br>
                <img class="image" src=${movie.Poster}/>
                <br>
                <br>
                <br>
            </div>
            `
        })   
batmanUL.innerHTML=moviesInfo.join("")
})

let requestMovieDetail = new XMLHttpRequest()
requestMovieDetail.open('GET', 'http://www.omdbapi.com/?i=${imdbID}&apikey=a1f0aabb')
requestMovieDetail.send()

