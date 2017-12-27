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
        <textarea
          value=""
          onChange={func}
          rows={5}
        />
      </div>
    )
    let result = page.renderInputSection("Title", "", func, 5)
    assert.deepEqual(result, expected)
  })
})
