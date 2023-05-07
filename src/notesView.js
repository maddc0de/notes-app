class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEL = document.querySelector("#main-container");

    this.buttonEl = document.querySelector("#note-button");
    this.buttonEl.addEventListener("click", () => {
      const newNoteData = document.querySelector("#note-input").value;
      this.addUserInputNote(newNoteData);
    });
  }

  displayNotes() {
    // 1. Remove all previous notes
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();
    // 2. for each note, create and append a new element in the main container
    notes.forEach((text) => {
      const noteEl = document.createElement("div");
      noteEl.className = "note";
      noteEl.textContent = text;
      this.mainContainerEL.appendChild(noteEl);
    });
  }

  // addUserInputNote(newNote) {
  //   this.model.addNote(newNote);
  //   document.querySelector("#note-input").value = ""; // clear input value

  //   this.displayNotes();
  // }

  // updating addUserInput Note
  async addUserInputNote(newNoteData) {
    await this.client.createNote({ content: newNoteData });
    document.querySelector("#note-input").value = ""; // clear input value

    await this.displayNotesFromApi(); //new note is showing but reprinting all the notes
  }

  displayNotesFromApi() {
    // document.querySelectorAll(".note").forEach((element) => {
    //   element.remove();
    // });

    this.client.loadNotes((notesData) => {
      this.model.setNotes(notesData);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;

// We now want to update the NotesView class so that the
// method client.createNote is called when the user submits
//the form — test-drive this feature.
//Remember, here again, to mock the dependency on
//NotesClient in this test.

// addNewNote(newNote) {
//   this.client.createNote({ content: newNote });
//   this.model.addNote(newNote);
//   this.clearInputField();
//   this.displayNotes();
// }
