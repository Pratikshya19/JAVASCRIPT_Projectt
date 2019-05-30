const pokemonURL = "http://localhost:3000/pokemon"
const div = document.querySelector(".pokemon_list")





fetch(pokemonURL)
  .then(res => res.json())
  .then((data) => {
    data.forEach((obj) => {
renderObj(obj)
    })
  })

  function renderObj(obj) {
let ul = document.createElement("ul")
let li = document.createElement("li")
div.append(ul)

li.innerText = obj.name
ul.append(li)

}




