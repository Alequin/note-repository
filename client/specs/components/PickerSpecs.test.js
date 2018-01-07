import assert from "assert"
import React from 'react'
import Picker from "./../../components/picker/Picker.jsx"
import PickerItem from "./../../components/picker/PickerItem.jsx"

describe("Picker", function(){

  let picker

  beforeEach(() => {
    picker = new Picker({})
  })

  it("can render items", () => {
    const items = ["1", "2", "3", "4"]

    let expected = (
      <div>
        <PickerItem key="1" item={"1"} onClickTag={picker.onClickTag}/>
        <PickerItem key="2" item={"2"} onClickTag={picker.onClickTag}/>
        <PickerItem key="3" item={"3"} onClickTag={picker.onClickTag}/>
        <PickerItem key="4" item={"4"} onClickTag={picker.onClickTag}/>
      </div>
    )
    let result = picker.renderItems(items)
    assert.deepEqual(result, expected)
  })

  it("can render item", () => {
    let expected = <PickerItem key="5" item={"one"} onClickTag={picker.onClickTag}/>
    let result = picker.renderItem(5, "one")
    assert.deepEqual(result, expected)
  })
})
