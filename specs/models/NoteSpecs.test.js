import assert from "assert"
import Note from "./../../models/Note.js"

describe("Note", function(){

  let note

  beforeEach(() => {
    note = new Note()
  })

  it("can init", () => {
    assert.ok(note)
  })
})
