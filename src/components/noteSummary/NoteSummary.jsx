import React from "react"
import PropTypes from 'prop-types'

class NoteSummary extends React.Component{
  render(){
    return (
      <div className="note-summary-frame">
        summary
      </div>
    )
  }
}

NoteSummary.propTypes = {
  note: PropTypes.object,
}

export default NoteSummary
