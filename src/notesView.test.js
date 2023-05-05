/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
// const NotesModel = require("./notesModel");

describe("web page test", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays notes returned from adding note in the model class", () => {
    const mockNotesModel = {
      notes: [],
      addNote: (note) => mockModel.notes.push(note),
      getNotes: () => mockModel.notes,
    };

    mockModel.addNote("this is a note");

    const view = new NotesView(mockNotesModel);
    view.displayNotes();

    expect(document.querySelector(".note").textContent).toEqual(
      "this is a note"
    );
    expect(document.querySelectorAll(".note").length).toBe(1);
  });

  xit("adds a new note", () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector("#note-input");
    inputEl.value = "Have breakfast";

    const buttonEl = document.querySelector("#note-button");
    buttonEl.click();

    expect(document.querySelector("div.note").textContent).toEqual(
      "Have breakfast"
    );
  });

  xit("displays the correct number of notes added", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("one");
    model.addNote("two");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  xit("displays notes returned from an Api call", () => {
    const model = new NotesModel();

    const mockClient = {
      loadNotes: () => ["test note"],
    };

    const view = new NotesView(model, mockClient);

    view.getApiNote(); //loads the api data and dis

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});

// test drive method displayNotesFromApi() on the NotesView class
// the method should:
// call loadNotes(callback) on the Client class
// when the response data is received,
// set the list of notes on the model and call displayNotes():
// mock the NotesClient
