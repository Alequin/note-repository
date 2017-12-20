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
      </div>
    )
  }
}

Date.propTypes = {

}

export default Date
