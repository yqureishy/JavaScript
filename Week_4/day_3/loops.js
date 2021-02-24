const customersUL = document.getElementById("customersUL")

const speakers = [

    { name: 'John Doe', category: 'JavaScript' },
    { name: 'Mary Doe', category: 'Python' },
    { name: 'Alex Doe', category: 'iOS' },
    { name: 'Steve Doe', category: 'Kotlin' },
    { name: 'Jerry Doe', category: 'Java' },

]

for (let index=0; index < speakers.length; index++){
    let speaker = speakers[index]
    let customerItem = `
        <li>
            <div> ${speaker.name} </div>
            <i> ${speaker.category}</i>
        </li>

    `
    customersUL.insertAdjacentHTML('beforeend', customerItem)
}