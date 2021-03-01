let dogImage=document.getElementById('dogImage')
let button=document.getElementById('button')



button.addEventListener('click', function(){

    let request=new XMLHttpRequest()



    request.addEventListener('load',function(){

        console.log(this.responseText)

        let result=JSON.parse(this.responseText)
        

        const photoDog=`<img src="${result.message}"/>`

        dogImage.innerHTML=photoDog



    })
    request.open('Get','https://dog.ceo/api/breeds/image/random')
    request.send()
})

