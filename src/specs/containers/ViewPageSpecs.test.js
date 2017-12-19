import assert from "assert"
import React from 'react'
import ViewPage from "./../../containers/viewPage/ViewPage.jsx"
import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {mockFullNote1} from "./../../dev/fakeSummaryNotesData.js"
import Tags from "./../../components/tags/Tags.jsx"


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

  it("can prepare detail section", () => {
    const tags = ["tag1", "tag2", "tag3"]

    let expected = (
      <div className="detail-frame">
        <p>Date: 2017-05-16</p>
        <hr/>
        <Tags
          className={"note-summary-tag"}
          prefix={"Tags:"}
          tags={tags}
        />
        <hr/>
        <p>Sources</p>
        <ul>
          <li>Source1, Internet, <a href="www.a.com">www.a.com</a></li>
          <li>Source2, Book, <a href="#">N/A</a></li>
        </ul>
      </div>
    )
    let result = page.prepareDetails(
      "2017-05-16",
      tags,
      [
        {name: "Source1", type: "Internet", link: "www.a.com"},
        {name: "Source2", type: "Book", link: null},
      ]
    )
    assert.deepEqual(result, expected)
  })
})
