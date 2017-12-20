
class DateFormat{

  constructor(year, month, day){
    if(!this.validateInput(year, month, day)){
      throw new Error(`Invalid input: year-${year} month-${month} day-${day}`)
    }
    this.year = year
    this.month = month
    this.day = day
  }

  validateInput(year, month, day){
    return (
      (year < 10000 && year > 999) &&
      (month < 13 && month > 0) &&
      (day < 32 && day > 0)
    )
  }

  toString(format, delimeter = "-"){
    let result = ""
    for(let j=0; j<format.length; j++){
      result += this.getValue(format[j])
      if(j<format.length-1) result += delimeter
    }
    return result
  }

  getValue(scale){
    switch(scale){
      case DateFormat.year:
        return this.year.toString()
      case DateFormat.month:
        return this.formatDigit(this.month)
      case DateFormat.day:
        return this.formatDigit(this.day)
    }
  }

  formatDigit(digit){
    digit = digit.toString()
    if(digit.length === 1){
      digit = "0" + digit
    }
    return digit
  }

}

DateFormat.year = "year"
DateFormat.month = "month"
DateFormat.day = "day"

export default DateFormat
