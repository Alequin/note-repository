import assert from "assert"
import {
  mapNoteRowToModel
} from "./../../models/repos/noteRepo.js"

describe("NoteRepo functions", function(){

  it("can map results from note table to model", () => {
    const results = {
      col4: 0,
      col1: "one",
      col2: "two",
      col3: "three",
      col5: "four"
    }
    const schema ={
      columns: {
        id: {name: "col4"},
        title: {name: "col1"},
        summary: {name: "col2"},
        file: {name: "col3"},
        creationDate: {name: "col5"}
      }
    }

    const note = mapNoteRowToModel(results, schema)

    let expected = 0
    let result = note.id
    assert.strictEqual(result, expected)

    expected = "one"
    result = note.title
    assert.strictEqual(result, expected)

    expected = "two"
    result = note.summary
    assert.strictEqual(result, expected)

    expected = "three"
    result = note.file
    assert.strictEqual(result, expected)

    expected = "four"
    result = note.creationDate
    assert.strictEqual(result, expected)
  })

})
