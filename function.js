const userInput = () => {
    let searchInput = document.querySelector('.search-component__input')
    let text = searchInput.value 
    let characters = /[A-z]/
    if ( text.length >= 2) {
        if (text.match(characters))
         
        rezultUsers = searchByName(text, users)
        renderSearchResults(rezultUsers, ".search-component__rezult")
    } 
}
// if ( text.length >= 2 & text.match(characters))

// filter users
const searchByName = (partialName, users) => {
    let rezultUsers = []
    users.forEach(user => {
        if (user.name.toLowerCase().startsWith(partialName.toLowerCase())) {
            rezultUsers.push(user)
        } 
    });
    return rezultUsers
}

const renderSearchResults = (rezultUsers, rootSelector) => {
    const rootElement = document.querySelector(rootSelector)  //find the div with ul
    let html = `<ul class="search-component__rezult-list">`

    rezultUsers.forEach(user => {
        html += `<li class="search-component__rezult-list-item">
                <img src="${user.avatar}">${user.name} 
                <span>${user.lastOnline} minutes</span>`
                
        if (user.lastOnline <= 5 ) {
            html += `<span class='search-component__rezult-list-item__online'></span>`
        } else {
            html += `<span class='search-component__rezult-list-item__offline'></span>`
        }

        html += `</li>`
    })
        
    html += `</ul>`

    rootElement.innerHTML = html
}
    