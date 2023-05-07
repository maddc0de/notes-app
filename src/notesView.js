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

  clearNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });
  }

  displayNotes() {
    // 1. Remove all previous notes
    this.clearNotes();

    const notes = this.model.getNotes();
    // 2. for each note, create and append a new element in the main container
    notes.forEach((text) => {
      const noteEl = document.createElement("div");
      noteEl.className = "note";
      noteEl.textContent = text;
      this.mainContainerEL.appendChild(noteEl);
    });
  }

  addUserInputNote(newNoteData) {
    this.client.createNote({ content: newNoteData });
    this.model.addNote(newNoteData); // need to add it here too so it shows up in the page right after clicking 'add note'
    document.querySelector("#note-input").value = ""; // clear input value

    this.displayNotes();
  }

  displayNotesFromApi() {
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
