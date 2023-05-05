/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
// const NotesModel = require("./notesModel");

describe("web page test", () => {
  let mockNotesModel;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    mockNotesModel = {
      notes: [],
      addNote: (note) => mockNotesModel.notes.push(note),
      getNotes: () => mockNotesModel.notes,
    };
  });

  describe(".displayNotes method", () => {
    it("displays notes returned from adding note in the model class", () => {
      mockNotesModel.addNote("this is a note");

      const view = new NotesView(mockNotesModel);
      view.displayNotes();

      expect(document.querySelector(".note").textContent).toEqual(
        "this is a note"
      );
      expect(document.querySelectorAll(".note").length).toBe(1);
    });

    it("displays the correct number of notes added", () => {
      mockNotesModel.addNote("one");
      mockNotesModel.addNote("two");

      const view = new NotesView(mockNotesModel);

      view.displayNotes();
      view.displayNotes();

      expect(document.querySelectorAll("div.note").length).toEqual(2);
    });
  });

  describe(".addUserInputNote method", () => {
    it("adds a new note from user input and displays it in the webpage", () => {
      const view = new NotesView(mockNotesModel);

      const inputEl = document.querySelector("#note-input");
      inputEl.value = "Have breakfast";

      view.addUserInputNote(inputEl.value);

      const buttonEl = document.querySelector("#note-button");
      buttonEl.click();

      expect(document.querySelector("div.note").textContent).toEqual(
        "Have breakfast"
      );
    });
  });

  describe(".displayNotesFromApi method", () => {
    it("displays notes returned from an Api call", () => {
      const mockModel = {
        notes: [],
        getNotes: () => mockNotesModel.notes,
        setNotes: (notes) => {
          mockNotesModel.notes = notes;
        },
      };

      const mockNotesClient = {
        loadNotes: (callback) => callback(["api test note"]),
      };

      const view = new NotesView(mockModel, mockNotesClient);

      view.displayNotesFromApi();

      expect(document.querySelectorAll(".note").length).toEqual(1);
      expect(document.querySelector(".note").textContent).toEqual(
        "api test note"
      );
    });
  });
});
