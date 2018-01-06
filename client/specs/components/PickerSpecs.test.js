import assert from "assert"
import React from 'react'
import Picker from "./../../components/picker/Picker.jsx"

describe("Picker", function(){

  let picker

  beforeEach(() => {
    picker = new Picker({})
  })

  it("can render items", () => {
    const items = ["1", "2", "3", "4"]

    let expected = (
      <div>
        <span key="1" className="picker-item" onClick={picker.onClickTag}>1</span>
        <span key="2" className="picker-item" onClick={picker.onClickTag}>2</span>
        <span key="3" className="picker-item" onClick={picker.onClickTag}>3</span>
        <span key="4" className="picker-item" onClick={picker.onClickTag}>4</span>
      </div>
    )
    let result = picker.renderItems(items)
    assert.deepEqual(result, expected)
  })

  it("can render item", () => {
    let expected = (
      <span key="5" className="picker-item" onClick={picker.onClickTag}>one</span>
    )
    let result = picker.renderItem(5, "one")
    assert.deepEqual(result, expected)
  })
})
