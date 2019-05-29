class Adapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1';
      this.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }

    fetchNotes() {
        return this.get(`${this.baseUrl}/notes`);
    //   return fetch(`${this.baseUrl}/notes`).then(res => res.json());
    }
   
    updateNote(id, body) {
        return this.patch(`${this.baseUrl}/notes/${id}`, body);
    }
    //   return fetch(`${this.baseUrl}/notes/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify(body),
    //   }).then(res => res.json());
    // }
  
    get(url) {
        return fetch(url).then(res => res.json());
      }
     
      patch(url, body) {
        return fetch(url, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify(body),
        }).then(res => res.json());
      }





}