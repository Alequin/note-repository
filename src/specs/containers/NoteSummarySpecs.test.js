import assert from "assert"
import React from 'react'
import {mockNoteSummeries1} from "./../../dev/fakeSummaryNotesData.js"
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

describe("Note Summary", function(){

  let note

  beforeEach(() => {
    note = new NoteSummary(mockNoteSummeries1[0])
  })

  it("can build array of tags in spans", () => {
    const className = "note-summary-tag"

    let expected = [
      <span key="0" className={className}>tag1</span>,
      <span key="1" className={className}>tag2</span>,
      <span key="2" className={className}>tag3</span>,
      <span key="3" className={className}>tag4</span>
    ]
    let result = note.buildTagList(mockNoteSummeries1[0].tags)
    assert.deepEqual(result, expected)
  })
})
