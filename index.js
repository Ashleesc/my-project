
let beers 

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
}

function displayBeer(e) {
    const beer = beers.find(b => b.id === parseInt(e.target.id))
    recipes.textContent = ""
    const h1 = document.createElement("h1")
    h1.textContent = beer.name
    recipes.append(h1)
}

// build out comment form
const form = document.querySelector("#form")
const input = document.querySelector("#new-item").value
const h3 = document.querySelector("h3")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    renderComments()
})

// render comments on the page following submission

// function renderComments(e){
//     const comment =
// }
    
// build out the master refresh button