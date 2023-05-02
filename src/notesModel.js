class NotesModel {
  constructor() {
    this.lists = [];
  }

  getNotes() {
    return this.lists;
  }

  addNote(note) {
    this.lists.push(note);
  }

  reset() {
    this.lists = [];
  }
}

module.exports = NotesModel;
