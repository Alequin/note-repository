import assert from "assert"
import React from 'react'
import MainPage from "./../../containers/mainPage/MainPage.jsx"
import Pages from "./../../containers/mainPage/Pages.js"
import SelectionPage from "./../../containers/selectionPage/SelectionPage.jsx"


describe("Main page", function(){

  let page

  beforeEach(() => {
    page = new MainPage()
  })

  it("can decide which page to show - selection page", () => {
    let expected = <SelectionPage notes={[]}/>
    let result = page.renderPage(Pages.selection)
    assert.deepEqual(result, expected)
  })
})
