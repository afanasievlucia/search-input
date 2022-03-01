let users = fakeUsers(100)

// search component event binding

let searchInput = document.querySelector('.search-component__input')

// querySelector - find one/first element ,   null
// querySelectorAll  - an array of all elemenst ,   []

searchInput.onkeyup = userInput

