document.addEventListener('DOMContentLoaded', () => {
    // const endPoint = 'http://localhost:3000/api/v1/notes';
    // fetch(endPoint)
    //   .then(res => res.json())
    //   .then(json =>
    //     json.forEach(note => {
    //       const markup = `
    //       <li>
    //         <h3>${note.title}
    //           <button>edit</button>
    //         </h3>
    //       </li>`;
   
    //       document.querySelector('#notes-list').innerHTML += markup;
    //     })
    //   );
    const app = new App();
    app.attachEventListeners();

    app.attachEventListeners();
  app.adapter.fetchNotes().then(app.createNotes);
 
//   app.adapter.fetchNotes().then(json => {
//     json.forEach(note => {
//       document.querySelector('#notes-list').innerHTML += new Note(note).renderListItem();
//     });
//   });
//   app.attachEventListeners();
  });