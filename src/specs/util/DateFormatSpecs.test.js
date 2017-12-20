import assert from "assert"
import DateFormat from "./../../util/DateFormat.js"

describe("Date format", function(){

  let date

  beforeEach(() => {
    date = new DateFormat(2017, 5, 1)
  })

  it("can format single digit values", () => {
    let expected = "01"
    let result = date.formatDigit(1)
    assert.strictEqual(result, expected)

    expected = "05"
    result = date.formatDigit(5)
    assert.strictEqual(result, expected)

    expected = "09"
    result = date.formatDigit(9)
    assert.strictEqual(result, expected)

    expected = "15"
    result = date.formatDigit(15)
    assert.strictEqual(result, expected)

    expected = "27"
    result = date.formatDigit(27)
    assert.strictEqual(result, expected)
  })

  it("can get value", () => {
    let expected = "2017"
    let result = date.getValue(DateFormat.year)
    assert.strictEqual(result, expected)

    expected = "05"
    result = date.getValue(DateFormat.month)
    assert.strictEqual(result, expected)

    expected = "01"
    result = date.getValue(DateFormat.day)
    assert.strictEqual(result, expected)
  })

  it("can format date -- yyyy-mm-dd", () => {
    let expected = "2017-05-01"
    let result = date.toString([
      DateFormat.year,
      DateFormat.month,
      DateFormat.day
    ], "-")
    assert.strictEqual(result, expected)
  })

  it("can format date -- mm-yyyy-dd", () => {
    let expected = "05-2017-01"
    let result = date.toString([
      DateFormat.month,
      DateFormat.year,
      DateFormat.day
    ], "-")
    assert.strictEqual(result, expected)
  })

  it("can format date -- dd-mm-yyyy", () => {
    let expected = "01-05-2017"
    let result = date.toString([
      DateFormat.day,
      DateFormat.month,
      DateFormat.year
    ], "-")
    assert.strictEqual(result, expected)
  })

  it("can format date with delimeter /", () => {
    let expected = "01/05/2017"
    let result = date.toString([
      DateFormat.day,
      DateFormat.month,
      DateFormat.year
    ], "/")
    assert.strictEqual(result, expected)
  })

  it("can validate input", () => {
      assert.ok(date.validateInput(2017, 5, 1))
      assert.ok(!date.validateInput(2017, 1, 0))
      assert.ok(!date.validateInput(2017, 1, 32))
      assert.ok(!date.validateInput(2017, 0, 1))
      assert.ok(!date.validateInput(2017, 13, 1))
      assert.ok(!date.validateInput(999, 1, 1))
      assert.ok(!date.validateInput(10000, 1, 1))
  })
})
