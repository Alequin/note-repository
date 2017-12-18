import React from "react"
import PropTypes from 'prop-types'
import MarkDown from "./../../components/markDown/MarkDown.jsx"

class View extends React.Component{
  render(){
    return (
      <div className="view-page-frame">
        <MarkDown className="content" markDown={this.props.note.content} />
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
