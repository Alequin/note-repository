import assert from "assert"
import {toggleItemPresenceInArray} from "./../../util/toggleItemPresenceInArray.js"

describe("toggle item presence in array", function(){
  it("can toggle item presence in array - item not present", () => {
    const items = [1,2,3,4,5]
    const item = 6
    let expected = [1,2,3,4,5,6]
    let result = toggleItemPresenceInArray(items, item)
    assert.deepEqual(result, expected)
  })

  it("can toggle item presence in array - item present", () => {
    const items = [1,2,3,4,5]
    const item = 3
    let expected = [1,2,4,5]
    let result = toggleItemPresenceInArray(items, item)
    assert.deepEqual(result, expected)
  })

  it("can toggle item presence in array - empty array", () => {
    const items = []
    const item = 3
    let expected = [3]
    let result = toggleItemPresenceInArray(items, item)
    assert.deepEqual(result, expected)
  })
})
