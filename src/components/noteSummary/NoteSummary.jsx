import React from "react"
import PropTypes from 'prop-types'

class NoteSummary extends React.Component{

  buildTagElement(key, tag){
    return (
      <span
        key={key}
        className="note-summary-tag">
          {tag}
      </span>
    )
  }

  buildTagList(tags){
    let key = 0
    const tagElements = tags.map((tag) => {
      return this.buildTagElement(key++, tag)
    })
    return tagElements
  }

  render(){
    return (
      <div className="note-summary-frame">
        <hr/>
        <h3>{this.props.note.title}</h3>
        <hr/>
        <p>{this.props.note.summary}</p>
        <hr/>
      </div>
    )
  }
}

NoteSummary.propTypes = {
  note: PropTypes.object,
}

export default NoteSummary
