import assert from "assert"
import React from 'react'
import MainPage from "./../../containers/mainPage/MainPage.jsx"
import Pages from "./../../containers/mainPage/Pages.js"
import SelectionPage from "./../../containers/selectionPage/SelectionPage.jsx"
import ViewPage from "./../../containers/viewPage/ViewPage.jsx"
import NewNotePage from "./../../containers/newNotePage/NewNotePage.jsx"


describe("Main page", function(){

  let page

  beforeEach(() => {
    page = new MainPage()
  })

  it("can decide which page to show - selection page", () => {
    let expected = <SelectionPage onClickSummary={page.onClickSummaryNote} notes={[]}/>
    let result = page.renderPage(Pages.selection)
    assert.deepEqual(result, expected)
  })

  it("can decide which page to show - view page", () => {
    let expected = <ViewPage note={{}}/>
    let result = page.renderPage(Pages.view)
    assert.deepEqual(result, expected)
  })

  it("can decide which page to show - newNote page", () => {
    let expected = <NewNotePage/>
    let result = page.renderPage(Pages.newNote)
    assert.deepEqual(result, expected)
  })
})
