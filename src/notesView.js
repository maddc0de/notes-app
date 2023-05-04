class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEL = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#note-button");
    this.buttonEl.addEventListener("click", () => {
      this.postNote();
      this.displayNotes();
    });
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((text) => {
      let newNote = document.createElement("div");
      newNote.classList.add("note");
      newNote.innerText = text;
      this.mainContainerEL.appendChild(newNote);
    });
  }

  postNote() {
    const inputEl = document.querySelector("#note-input");
    this.model.addNote(inputEl.value);
  }
}

module.exports = NotesView;
