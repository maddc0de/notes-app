class NotesClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      //.json() for converting json into js code
      .then((jsonResponse) => jsonResponse.json())
      .then((notesData) => callback(notesData));
  }
  // Use fetch() to POST JSON-encoded data.
  async createNote(newNoteData) {
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNoteData),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

module.exports = NotesClient;

// const data = { content: "example" };
// const client = new NotesClient();
// client.createNote(data);
