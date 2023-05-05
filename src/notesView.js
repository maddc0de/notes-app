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

  postNote() {
    const inputEl = document.querySelector("#note-input");
    this.model.addNote(inputEl.value);
    // clear input value
    inputEl.value = "";
  }
}

module.exports = NotesView;
