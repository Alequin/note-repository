import React from "react"
import PropTypes from 'prop-types'

import {addEllipsis} from "./../../util/addEllipsis"

class NoteSummary extends React.Component{

  prepareTitle(text){
    return <h2>{text}</h2>
  }

  prepareSummaryText(text, length){
    return (
      <p className="summary-text">
        {addEllipsis(text, length)}
      </p>
    )
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
    const elements = [
      <span key="-1" className="note-summary-tag">Tags:</span>
    ]
    let key = 0
    for(let tag of tags){
      elements.push(this.buildTagElement(key++, tag))
    }
    return elements
  }

  prepareDateText(date){
    return <p>{"Date: " + date}</p>
  }

  render(){
    return (
      <div className="note-summary-frame">
        <hr/>
        {this.prepareTitle(this.props.note.title)}
        <hr/>
        {this.prepareSummaryText(this.props.note.summary, 100)}
        <hr/>
        {this.buildTagList(this.props.note.tags)}
        <hr/>
        {this.prepareDateText(this.props.note.creationDate)}
        <hr/>
      </div>
    )
  }
}

NoteSummary.propTypes = {
  note: PropTypes.object,
  onClick: PropTypes.func
}

export default NoteSummary
