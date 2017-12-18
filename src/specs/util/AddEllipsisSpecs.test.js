import assert from "assert"
import {addEllipsis} from "./../../util/AddEllipsis.js"

describe("Add Ellipsis", function(){

  it("can add ellipsis", () => {
    let expected = "stri..."
    let result = addEllipsis("string", 4)
    assert.strictEqual(result, expected)
  })

  it("can add ellipsis to end of string", () => {
    let expected = "string..."
    let result = addEllipsis("string", 6)
    assert.strictEqual(result, expected)
  })
})
