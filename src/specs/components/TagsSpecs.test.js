import assert from "assert"
import React from 'react'
import Tags from "./../../components/tags/Tags.jsx"

describe("Tags", function(){

  it("can make tag elements", () => {
    const tags = new Tags({})

    const tagValues = ["tag1", "tag2", "tag3"]

    let expected = [
      <span key="-1" className="note-summary-tag">Tags:</span>,
      <span
        key="0"
        className="note-summary-tag">
          tag1
      </span>,
      <span
        key="1"
        className="note-summary-tag">
          tag2
      </span>,
      <span
        key="2"
        className="note-summary-tag">
          tag3
      </span>
    ]
    let result = tags.buildTags("note-summary-tag", "Tags:", tagValues)
    assert.deepEqual(result, expected)
  })
})
