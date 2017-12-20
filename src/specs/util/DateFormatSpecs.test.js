import assert from "assert"
import DateFormat from "./../../util/DateFormat.js"

describe("Date format", function(){

  it("can format date -- yyyy-mm-dd", () => {
    const date = new DateFormat(2017, 5, 1)

    let expected = "2017-05-01"
    let result = date.toString([
      DateFormat.year,
      DateFormat.month,
      DateFormat.day
    ], "-")
    assert.strictEqual(result, expected)
  })
})
