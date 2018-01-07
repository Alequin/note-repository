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
        <PickerItem key="1" item={"1"} onClickItem={picker.onClickItem}/>
        <PickerItem key="2" item={"2"} onClickItem={picker.onClickItem}/>
        <PickerItem key="3" item={"3"} onClickItem={picker.onClickItem}/>
        <PickerItem key="4" item={"4"} onClickItem={picker.onClickItem}/>
      </div>
    )
    let result = picker.renderItems(items)
    assert.deepEqual(result, expected)
  })

  it("can render item", () => {
    let expected = <PickerItem key="5" item={"one"} onClickItem={picker.onClickItem}/>
    let result = picker.renderItem(5, "one")
    assert.deepEqual(result, expected)
  })
})
