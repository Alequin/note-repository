import React from "react"
import PropTypes from 'prop-types'

class Picker extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="picker-frame">

      </div>
    )
  }
}

Picker.propTypes = {
  items: PropTypes.array,
  onClickTag: PropTypes.func
}

export default Picker
