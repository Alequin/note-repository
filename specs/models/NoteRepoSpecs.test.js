import assert from "assert"
import {
  mapNoteRowToModel
} from "./../../models/repos/noteRepo.js"

describe("NoteRepo functions", function(){

  it("can map results from note table to model", () => {
    const results = {
      col1: "one",
      col2: "two",
      col3: "three"
    }
    const schema ={
      title: {name: "col1"},
      summary: {name: "col2"},
      file: {name: "col3"}
    }

    const note = mapNoteRowToModel(results, schema)

    let expected = "one"
    let result = note.title
    assert.strictEqual(result, expected)

    expected = "two"
    result = note.summary
    assert.strictEqual(result, expected)

    expected = "three"
    result = note.file
    assert.strictEqual(result, expected)
  })

})
