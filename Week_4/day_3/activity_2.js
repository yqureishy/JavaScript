var postsUL = document.getElementById("postsUL")

for (let index=0; index < posts.length; index++) {

    let post = posts[index]

    const postItem = `
    <li> 
        <span> ID# </span> <b>${post.id} </b>
        <p> <i> Title: ${post.title} </i> </p>
    </li>

    `
postsUL.insertAdjacentHTML("beforeend",postItem)

}