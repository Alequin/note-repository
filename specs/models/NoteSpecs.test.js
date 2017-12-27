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

  it("can set tags", () => {
    const tags = ["one", "two", "three"]
    note.setTags(tags)

    let expected = tags
    let result = note.tags
    assert.deepEqual(result, expected)
  })

  it("can set tags with null input", () => {
    note.setTags(null)

    let expected = []
    let result = note.tags
    assert.deepEqual(result, expected)
  })
})
