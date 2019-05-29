class App {
    constructor() {
        this.adapter = new Adapter();

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // With this setup, we can bind the correct context once and then not have to worry about it ever again :)
        this.createNotes = this.createNotes.bind(this);
        this.addNotes = this.addNotes.bind(this);
      }
      attachEventListeners() {
        document.querySelector('#notes-list').addEventListener('click', this.handleEditClick);
        document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
      }
     
      // notice the previous functionality is broken up
      // into two different methods for future re-use...
      createNotes(notes) {
        notes.forEach(note => {
          new Note(note);
        });
        this.addNotes();
      }
     
      addNotes() {
        document.querySelector('#notes-list').innerHTML = '';
        Note.all.forEach(
          note => (document.querySelector('#notes-list').innerHTML += note.renderListItem())
        );
      }
     
      handleFormSubmit(e) {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const note = Note.findById(id);
        const title = e.target.querySelector('input').value;
        const content = e.target.querySelector('textarea').value;
     
        const bodyJSON = { title, content };
        this.adapter.updateNote(note.id, bodyJSON).then(updatedNote => console.log(updatedNote));
      }
     
      handleEditClick(e) {
        const id = parseInt(e.target.dataset.id);
        const note = Note.findById(id);
        document.querySelector('#update').innerHTML = note.renderUpdateForm();
      }
   

      

    // attachEventListeners() {
    //   document.querySelector('#notes-list').addEventListener('click', e => {
    //     const id = parseInt(e.target.dataset.id);
    //     const note = Note.findById(id);
    //     document.querySelector('#update').innerHTML = note.renderUpdateForm();
    //     // console.log(note);
        
    //     // console.log('clicked');



    //     document.querySelector('#update').addEventListener('submit', e => {
    //         e.preventDefault();
    //         const id = parseInt(e.target.dataset.id);
    //         const note = Note.findById(id);
    //         const title = e.target.querySelector('input').value;
    //         const content = e.target.querySelector('textarea').value;
    //         const jsonBody = { title, content };
    //         this.adapter.updateNote(note.id, jsonBody).then(updatedNote => console.log(updatedNote));
       
    //         const bodyJSON = { title, content };
    //         fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
    //           method: 'PATCH',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json',
    //           },
    //           body: JSON.stringify(bodyJSON),
    //         })
    //           .then(res => res.json())
    //           // our backend responds with the updated note instance represented as JSON
    //           .then(updatedNote => console.log(updatedNote));


    //       });
    //   });
    // }
  }