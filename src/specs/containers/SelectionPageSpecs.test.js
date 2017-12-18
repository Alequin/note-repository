import assert from "assert"
import React from 'react';
import mockNotes from "./../../dev/fakeSummaryNotesData.js"
import SelectionPage from "./../../containers/selectionPage/SelectionPage.jsx"
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

describe("Selection Page", function(){

  let page

  beforeEach(() => {
    page = new SelectionPage(mockNotes)
  })

  it("can render single summary note", () => {
    let expected = <NoteSummary key="0" note={mockNotes[0]}/>
    let result = page.buildSingleSummary(0, mockNotes[0])
    assert.deepEqual(result, expected)
  })

  it("can render list of summary notes", () => {
    const page = new SelectionPage(mockNotes)

    let expected = [
      <NoteSummary key="0" note={mockNotes[0]}/>,
      <NoteSummary key="1" note={mockNotes[1]}/>,
      <NoteSummary key="2" note={mockNotes[2]}/>
    ]
    let result = page.buildSummaries(mockNotes)
    assert.deepEqual(result, expected)
  })
})
