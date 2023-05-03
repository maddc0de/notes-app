class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEL = document.querySelector("#main-container");
    console.log(this.mainContainerEL);
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      let newNote = document.createElement("div");
      newNote.innerText = note;
      this.mainContainerEL.appendChild(newNote);
    });
  }
}

module.exports = NotesView;
