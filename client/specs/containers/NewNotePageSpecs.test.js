import assert from "assert"
import React from 'react'
import NewNotePage from "./../../containers/newNotePage/NewNotePage.jsx"


describe("View page", function(){

  let page

  beforeEach(() => {
    page = new NewNotePage({})
  })

  it("can render input section", () => {
    const func = () => {}
    let expected = (
      <div>
        <h2>Title</h2>
        <input
          type="text"
          value=""
          onChange={func}
          style={{height: "15px"}}/>
      </div>
    )
    let result = page.renderInputSection("Title", "", func, "15px")
    assert.deepEqual(result, expected)
  })
})
