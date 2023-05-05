class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEL = document.querySelector("#main-container");

    this.buttonEl = document.querySelector("#note-button");
    this.buttonEl.addEventListener("click", () => {
      const newNote = document.querySelector("#note-input").value;
      this.addUserInputNote(newNote);
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

  addUserInputNote(newNote) {
    this.model.addNote(newNote);
    // clear input value
    document.querySelector("#note-input").value = "";

    this.displayNotes();
  }

  getApiNote() {
    // calls loadNotes from Client here?
    // gets the data, then add it in setNotes in Model class
  }
}

module.exports = NotesView;
