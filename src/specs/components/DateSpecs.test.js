import assert from "assert"
import Date from "./../../components/date/Date.jsx"
import DateFormat from "./../../util/DateFormat.js"

describe("test", function(){

  let date

  beforeEach(() => {
    date = new Date({})
  })

  it("can prepare date -- dd-mm-yyyy", () => {
    let expected = "01-05-2017"
    let result = date.prepareDate(2017, 5, 1)
    assert.strictEqual(result, expected)
  })
})
