class NotesClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      //.json() for converting json into js code
      .then((jsonResponse) => jsonResponse.json())
      .then((data) => callback(data));
  }
}

module.exports = NotesClient;