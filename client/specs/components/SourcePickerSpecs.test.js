import assert from "assert"
import React from 'react'
import SourcePicker from "./../../components/sourcePicker/SourcePicker.jsx"
import PickerItem from "./../../components/picker/PickerItem.jsx"

describe("Source Picker", function(){

  let picker

  beforeEach(() => {
    picker = new SourcePicker({})
  })

  it("can render item", () => {
    let expected = <PickerItem key="5" item={"one - two"} onClickItem={picker.onClickItem}/>
    let result = picker.renderItem(5, {name: "one", type: "two"})
    assert.deepEqual(result, expected)
  })
})
