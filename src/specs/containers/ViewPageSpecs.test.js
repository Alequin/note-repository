import assert from "assert"
import React from 'react'
import ViewPage from "./../../containers/viewPage/ViewPage.jsx"
import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {mockFullNote1} from "./../../dev/fakeSummaryNotesData.js"

describe("View page", function(){

  let page

  beforeEach(() => {
    page = new ViewPage({note: mockFullNote1})
  })

  it("can prepare header", () => {
    let expected = (
      <div className="note-header">
        <h2>title1</h2>
        <p>this is a summary</p>
      </div>
    )
    let result = page.prepareHeader("title1", "this is a summary")
    assert.deepEqual(result, expected)
  })

  it("can prepare content", () => {
    let expected = (
      <MarkDown className="content" markDown={""} />
    )
    let result = page.prepareContent("")
    assert.deepEqual(result, expected)
  })
})
