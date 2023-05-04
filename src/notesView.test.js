/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("web page test", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays the notes", () => {
    // const doubleModel = {
    //   getNotes: () => ["this is a note"],
    // };
    const model = new NotesModel();
    model.addNote("this is a note");

    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelector(".note").innerText).toEqual("this is a note");
    expect(document.querySelectorAll(".note").length).toBe(1);
  });

  it("adds a new note", () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector("#note-input");
    inputEl.value = "Have breakfast";

    const buttonEl = document.querySelector("#note-button");
    buttonEl.click();

    expect(document.querySelector(".note").innerText).toEqual("Have breakfast");
  });
});
