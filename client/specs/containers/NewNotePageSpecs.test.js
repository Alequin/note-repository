import assert from "assert"
import React from 'react'
import NewNotePage from "./../../containers/newNotePage/NewNotePage.jsx"


describe("View page", function(){

  let page

  beforeEach(() => {
    page = new NewNotePage({})
  })

  it("can render input title text", () => {
    const func = () => {}
    let expected = (
      <div>
        <h2>Title</h2>
        <input type="text" value="" onChange={func}/>
      </div>
    )
    let result = page.renderTitleInput("", func)
    assert.deepEqual(result, expected)
  })
})
