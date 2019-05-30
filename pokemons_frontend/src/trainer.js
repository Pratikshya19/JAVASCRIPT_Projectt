const trainerURL = "http://localhost:3000/trainer"
const POKEMONS_URL = "http://localhost:3000/pokemon"

fetch(trainerURL)
  .then(res => res.json())
  .then((data) => {
    data.forEach((obj) => {
      console.log(obj)
renderObj(obj)

    })
  })

  function renderObj(obj) {


    let cardDiv = document.createElement("div");
    document.querySelector("main").append(cardDiv);
    cardDiv.className = "card";
    cardDiv.setAttribute("data-id", obj.id);

  let htag = document.createElement("h4");
  htag.innerText = obj.name;

 
let addButton = document.createElement("button");
addButton.setAttribute("data-trainer-id", obj.id);
addButton.innerText = "Add Pokemon";

    addButton.addEventListener("click", function(e) {
      e.preventDefault()
      debugger
    })
//       let id = parseInt(e.target.getAttribute("data-trainer-id"));
//       fetch(POKEMONS_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           "trainer_id": id
//         })
//       }).then( (res) => res.json() )
//       .then ( (pokemon) => {
//         if(!pokemon.error) {
//           // let ul = document.querySelector(`ul#trainer-${id}`);
// let ul = document.querySelector("#pokemon")
//           let li = document.createElement("li");
//           ul.append(li);
//           let button = document.createElement('button');
//           li.innerText = `${pokemon.name}`;
//           li.append(button);
//           button.className = "DELETE";
//           button.setAttribute('data-pokemon-id', pokemon.id);
//         button.innerText = "delete";
        
        
//         button.addEventListener("click", function(e){
//           let id = e.target.getAttribute("data-pokemon-id");
//           let r = fetch(`${POKEMONS_URL}/${id}`, {
//             method: "DELETE" 
//           }).then( console.log );
//           e.target.parentElement.style.display = "none";
//         });
//       }


//       });
//     });





 


  }
