import React from "react"
import PropTypes from 'prop-types'

import {addEllipsis} from "./../../util/addEllipsis"

class NoteSummary extends React.Component{

  prepareTitle(text){
    return <h2>{text}</h2>
  }

  prepareSummaryText(text, length){
    return addEllipsis(text, length)
  }

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
          {this.prepareTitle(this.props.note.title)}
        <hr/>
        <p className="summary-text">
          {this.prepareSummaryText(this.props.note.summary, 100)}
        </p>
        <hr/>
        <span className="note-summary-tag">Tags:</span>
        {this.buildTagList(this.props.note.tags)}
        <hr/>
        <p>Date: {this.props.note.creationDate}</p>
        <hr/>
      </div>
    )
  }
}

NoteSummary.propTypes = {
  note: PropTypes.object,
}

export default NoteSummary
