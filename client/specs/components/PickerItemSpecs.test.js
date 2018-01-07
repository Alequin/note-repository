import assert from "assert"
import React from 'react'
import PickerItem from "./../../components/picker/PickerItem.jsx"

describe("Picker Item", function(){

  let pickerItem

  beforeEach(() => {
    pickerItem = new PickerItem({})
  })

  it("can render item", () => {
    let expected = (
      <span className="picker-item" onClick={pickerItem.onClickTag}>one</span>
    )
    let result = pickerItem.renderItem("one")
    assert.deepEqual(result, expected)
  })
})
