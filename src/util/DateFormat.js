
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
          const month = this.month.toString()
          if(month.length === 1) result += "0" + month
          else result += month
          break;
        case DateFormat.day:
          const day = this.day.toString()
          if(day.length === 1) result += "0" + day
          else result += day
          break;
      }
      if(j<format.length-1)result += delimeter
    }

    return result
  }

}

DateFormat.year = "year"
DateFormat.month = "month"
DateFormat.day = "day"

export default DateFormat
