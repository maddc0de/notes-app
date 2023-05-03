const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
model.addNote("Buy milk");

const view = new NotesView(model);
view.displayNotes();

// model.addNote("Go to the gym");

// console.log(model.getNotes());
