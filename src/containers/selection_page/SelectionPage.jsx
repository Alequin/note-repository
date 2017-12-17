import React from "react"
import PropTypes from 'prop-types'

class SelectionPage extends React.Component{
  render(){
    console.log(this.props.noteList);
    return (
      <div className="selection-page-frame">

      </div>
    )
  }
}

SelectionPage.propTypes = {
  noteList: PropTypes.array,
}

export default SelectionPage
