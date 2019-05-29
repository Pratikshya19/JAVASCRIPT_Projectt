const trainerURL = "http://localhost:3000/trainer"


fetch(trainerURL)
  .then(res => res.json())
  .then((data) => {
    data.forEach((obj) => {
renderObj(obj)
    })
  })

  function renderObj(obj) {
    let div = document.createElement("div");
  div.setAttribute("class","card");

  let htag = document.createElement("h4");
  h4tag.innerText = obj.name;
  }
