
class DateFormat{

  constructor(year, month, day){
    this.year = year
    this.month = month
    this.day = day
  }

  toString(format, delimeter = "-"){
    let result = ""

    for(let j=0; j<format.length; j++){
      const scale = format[j]
      switch(scale){
        case DateFormat.year:
          result += this.year.toString()
          break;
        case DateFormat.month:
          result += this.formatDigit(this.month)
          break;
        case DateFormat.day:
          result += this.formatDigit(this.day)
          break;
      }
      if(j<format.length-1)result += delimeter
    }

    return result
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
