import assert from "assert"
import React from 'react'
import Sources from "./../../components/sources/Sources.jsx"

describe("Sources component", function(){

  let sources
  let source1

  beforeEach(() => {
    sources = new Sources({})
    source1 = {
      name: "source1",
      type: "internet",
      location: "www.a.com"
    }
  })

  it("can prepare one source -- type: internet", () => {
    let expected = (
      <li>
        <a href="www.a.com">Name: source1<br/>From: internet<br/>Link: www.a.com</a>
      </li>
    )
    let result = sources.prepareSource(source1)
    assert.deepEqual(result, expected)
  })
})
