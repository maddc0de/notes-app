const Client = require("./notesClient");
// This makes `fetch` available to our test
// (its not by default, normally `fetch` is only available within the browser)
require("jest-fetch-mock").enableMocks();

describe("NotesClient class", () => {
  it("calls fetch and loads notes", (done) => {
    // 1. Instantiate the class
    const client = new Client();

    // 2. mock the response from `fetch`
    fetch.mockResponseOnce(
      // turning an array into a JSON (mocking JSON response)
      JSON.stringify(["This note is coming from the server"])
    );
    // 3. call the method, giving a callback function
    // when HTTP response is receive, the callback will be called.
    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi).toContain(
        "This note is coming from the server"
      );
      done();
    });
  });
});
