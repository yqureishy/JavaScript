fetch('https://troubled-peaceful-hell.glitch.me/orders')
.then((response)=>{
    return response.json()
}).then(function(result){
    console.log(result)
})