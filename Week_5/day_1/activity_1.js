let cat_url='https://cat-fact.herokuapp.com/facts'

let request = new XMLHttpRequest()
request.addEventListener('load', function(){
let result = JSON.parse(this.responseText)
console.log(result)

result.map(fact)

})
request.open('Get', cat_url)
request.send()