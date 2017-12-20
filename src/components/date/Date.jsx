import React from "react"
import PropTypes from 'prop-types'
import DateFormat from "./../../util/DateFormat.js"

class Date extends React.Component{

  prepareDate(year, month, day){
    const date = new DateFormat(year, month, day)
    return date.toString([
      DateFormat.day,
      DateFormat.month,
      DateFormat.year
    ], "-")
  }

  render(){
    return (
      <div className={this.props.className}>
        <span>{this.props.prefix}</span>
        <span>
          {this.prepareDate(
            this.props.year,
            this.props.month,
            this.props.day
          )}
        </span>
      </div>
    )
  }
}

Date.propTypes = {
  className: PropTypes.string,
  prefix: PropTypes.string,
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
}

export const renderDateFromString = function(className, prefix, date){
  const splitDate = date.split("-")
  return <Date
    className={className}
    prefix={prefix}
    year={parseInt(splitDate[0])}
    month={parseInt(splitDate[1])}
    day={parseInt(splitDate[2])}
  />
}

export default Date
