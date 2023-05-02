const NotesModel = require("./notesModel");

const model = new NotesModel();

model.addNote("Buy milk");
model.addNote("Go to the gym");

console.log(model.getNotes());
