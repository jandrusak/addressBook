let arrayOfPersons;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = () => {
  getPersons()
}


// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
function getPersons() {
  fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(persons => arrayOfPersons = persons.results);
}

describe('getPersons', () => {
  it('Null Address', () => assert.equal(validateAddress(null), false));
  it('Undefined Address', () => assert.equal(validateAddress(undefined), false));
});



const assert = require('assert');
const validateAddress = require('./validateAddress'); // import your address validation function















// This function logs the results in your browser's console
const consolePersons = () => {
  console.log(arrayOfPersons)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPersons = () => {
  const allPersons = document.getElementById('all-persons')
  arrayOfPersons.map((persons, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`Firstname: ${persons.name.first} Lastname: ${persons.name.last}`)
    const img = document.createElement('img')
    img.src = persons.picture.medium
    li.appendChild(img)
    // li.className = 'testing'
    li.appendChild(text)
    allPersons.append(li)

    // creating a button --- this is the hardest part.
    const myButton = document.createElement('button')
    myButton.innerHTML = "More Info"
    myButton.className = "Info"
    myButton.onclick = () => {
    
    const myDiv = document.createElement('div')
    myDiv.innerHTML = `<p>email: ${persons.email} </p> <p>phone: ${persons.phone}</p>`
    li.appendChild(myDiv) 

    }
    // after having text, needs an on-click (which will be a function)
    // on-click function should include what info should be revealed 

    li.appendChild(myButton) 

  })
}