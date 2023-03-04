
// set empty array for data
let beers = []

// set base url fpr API
const BASE_URL = "https://api.punkapi.com/v2/"

document.addEventListener("DOMContentLoaded", () => {
    getRecipes()
})

// fetch request and handle promise
function getRecipes() {
    
    const recipes = document.querySelector("#recipes")

    fetch(BASE_URL + "beers/")
        .then(resp => resp.json())
        .then(data => {
            renderData(data)
            beers = data
        })
    const renderData = (data) => {
        recipes.textContent = ""
        data.forEach(item => {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.textContent = item.name
            a.href = "#"
            a.id = item.id
            li.appendChild(a)
            recipes.appendChild(li)
        }) 
    }
    recipes.addEventListener("click", displayBeer)

// build out the master refresh button
    const resetButton = document.querySelector("#reset-button")
    resetButton.addEventListener("click", (e) => {
        renderData(beers)
    })
}

function displayBeer(e) {
    const beer = beers.find(b => b.id === parseInt(e.target.id))
    recipes.textContent = ""
    const h3 = document.createElement("h3")
    const para = document.createElement("p")
    const para2 = document.createElement("p")
    const para3 = document.createElement("p")
    h3.textContent = beer.name
    para.textContent = `Description: ${beer.description}`
    para2.textContent = `Ideal Food Pairing: ${beer.food_pairing}`
    para3.textContent = `Tagline: "${beer.tagline}"`
    recipes.append(h3, para, para2, para3)
    const beerDetails = h3+para+para2+para3
}

// build out comment form and render comments to the page
const form = document.querySelector("#comment-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const authorInput = document.querySelector('#author-input')
    const commentInput = document.querySelector('#comment-input') 
    const date = new Date()
    const timestamp = date.toLocaleString()
    const newComment = document.createElement("li")
    newComment.textContent = `${authorInput.value} - ${commentInput.value} - ${timestamp}`
    const commentsList = document.querySelector("#comments-list")
    commentsList.appendChild(newComment)
// add code to clear the form after submission
    authorInput.value = ""
    commentInput.value = ""
})
    
