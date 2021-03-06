import assert from "assert"
import React from 'react'
import Sources from "./../../components/sources/Sources.jsx"

describe("Sources component", function(){

  let sources
  let source1
  let source2

  beforeEach(() => {
    sources = new Sources({})
    source1 = {
      name: "source1",
      type: "internet",
      location: "www.a.com"
    }
    source2 = {
      name: "source2",
      type: "book",
      location: "N/A"
    }
  })

  it("can prepare one source -- type: internet", () => {
    let expected = (
      <li key={0}>
        <a href="www.a.com">Name: source1<br/>From: internet<br/>Link: www.a.com</a>
      </li>
    )
    let result = sources.prepareSource(0, source1)
    assert.deepEqual(result, expected)
  })

  it("can prepare one source -- type: book", () => {
    let expected = (
      <li key={0}>
        <a href="N/A">Name: source2<br/>From: book<br/>Link: N/A</a>
      </li>
    )
    let result = sources.prepareSource(0, source2)
    assert.deepEqual(result, expected)
  })

  it("can prepare a list of sources", () => {
    let expected = (
      <ul>
        <li key={0}>
          <a href="www.a.com">Name: source1<br/>From: internet<br/>Link: www.a.com</a>
        </li>
        <li key={1}>
          <a href="N/A">Name: source2<br/>From: book<br/>Link: N/A</a>
        </li>
      </ul>
    )
    let result = sources.prepareSourceList([source1, source2])
    assert.deepEqual(result, expected)
  })
})
