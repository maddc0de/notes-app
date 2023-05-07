class NotesClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      //.json() for converting json into js code
      .then((jsonResponse) => jsonResponse.json())
      .then((notesData) => callback(notesData));
  }

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

// Use fetch() to POST JSON-encoded data.
// async function postJSON(data) {
//   try {
//     const response = await fetch("https://example.com/profile", {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const data = { content: "example" };
// const client = new NotesClient();
// client.createNote(data);
