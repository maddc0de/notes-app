class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  // notes coming from an API
  setNotes(notes) {
    notes.forEach((note) => {
      this.notes.push(note);
    });
  }
}

module.exports = NotesModel;
