import assert from "assert"
import React from 'react'
import Date from "./../../components/date/Date.jsx"
import {renderDateFromString} from "./../../components/date/Date.jsx"
import DateFormat from "./../../util/DateFormat.js"

describe("Date component", function(){

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

describe("renderDateFromString", function(){

  it("can render date from string (yyyy-mm-dd)", () => {
    let expected = <Date className={"class"} prefix="Date: " year={2017} month={5} day={1}/>
    let result = renderDateFromString("class", "Date: ", "2017-05-01")
    assert.deepEqual(result, expected)
  })
})
