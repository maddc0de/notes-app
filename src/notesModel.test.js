const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  let model;
  beforeEach(() => {
    model = new NotesModel();
  });

  it("initially returns an empty array", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("returns an array of notes", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");

    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("resets the list of notes in the array to zero", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});
