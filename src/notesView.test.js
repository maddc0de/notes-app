/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");

describe("web page test", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays the notes", () => {
    const fakeModel = {
      getNotes: () => ["this is a note"],
    };
    // const model = new NotesModel();
    // model.addNote("this is a note");

    const view = new NotesView(fakeModel);
    view.displayNotes();

    expect(document.querySelector("div").innerText).toEqual("this is a note");
    expect(document.querySelectorAll("div").length).toBe(1);
  });
});
