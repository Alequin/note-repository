import assert from "assert"
import React from 'react'
import {mockNoteSummeries1} from "./../../dev/fakeSummaryNotesData.js"
import SelectionPage from "./../../containers/selectionPage/SelectionPage.jsx"
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

describe("Selection Page", function(){

  let page

  beforeEach(() => {
    page = new SelectionPage(mockNoteSummeries1)
  })

  it("can render single summary note", () => {
    let expected = <NoteSummary key="0" note={mockNoteSummeries1[0]}/>
    let result = page.buildSingleSummary(0, mockNoteSummeries1[0])
    assert.deepEqual(result, expected)
  })

  it("can render list of summary notes", () => {
    const page = new SelectionPage(mockNoteSummeries1)

    let expected = [
      <NoteSummary key="0" note={mockNoteSummeries1[0]}/>,
      <NoteSummary key="1" note={mockNoteSummeries1[1]}/>,
      <NoteSummary key="2" note={mockNoteSummeries1[2]}/>
    ]
    let result = page.buildSummaries(mockNoteSummeries1)
    assert.deepEqual(result, expected)
  })
})
