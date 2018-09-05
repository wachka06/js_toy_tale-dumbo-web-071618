const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE
let toyCollection = document.getElementById('toy-collection')

fetch('http://localhost:3000/toys')
.then(res => res.json())
.then(toy => {
  json.forEach(toy => {
    toyCollection.append(createToyDiv(toy))
  })
})


let newToyForm = document.getElementById('new-toy-form')
newChoreForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let nameInput = document.getElementById('name')
  let imageInput = document.getElementById('image')
  let likesInput = document.getElementById('likes')

  fetch('http://localhost:3000/chores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      image: imageInput.value,
      likes: likesInput.value
    })
  }).then(response => response.json()).then(toy =>{
    toyList.append(createToyDiv(toy))
  })

})


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
function createToyDiv(toy){
  let toyItem = document.createElement('div');
  toyItem.innerHTML = `
            <h2>${toy.name}</h2>
            <img src=`${toy.image}` class='toy-avatar'>
            <p>${toy.likes}</p>
            <button class='like-btn'>Like <3</button>
        `
  toyItem.classList.add('card')
  toyItem.dataset.id = chore.id
  return toyItem
}
