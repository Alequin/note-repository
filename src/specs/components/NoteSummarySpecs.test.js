import assert from "assert"
import React from 'react'
import {mockNoteSummeries1} from "./../../dev/fakeSummaryNotesData.js"
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"
import Tags from "./../../components/tags/Tags.jsx"
import DateFormat from "./../../util/DateFormat.js"

describe("Note Summary", function(){

  let note

  beforeEach(() => {
    note = new NoteSummary(mockNoteSummeries1[0])
  })

  it("can build array of tags in spans", () => {
    const tags = ["tag1", "tag2", "tag3"]

    let expected = (
      <Tags
        className={"note-summary-tag"}
        prefix={"Tags:"}
        tags={tags}
      />
    )
    let result = note.buildTagList(tags)
    assert.deepEqual(result, expected)
  })

  it("can prepare summary text", () => {
    let input = "123456789"
    let expected = <p className="summary-text">12345678...</p>
    let result = note.prepareSummaryText(input, 8)
    assert.deepEqual(result, expected)
  })

  it("can prepare summary title", () => {
    let expected = <h2>this is a title</h2>
    let result = note.prepareTitle("this is a title")
    assert.deepEqual(result, expected)
  })
})
