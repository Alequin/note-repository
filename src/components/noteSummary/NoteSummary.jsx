import React from "react"
import PropTypes from 'prop-types'
import Tags from "./../../components/tags/Tags.jsx"

import {addEllipsis} from "./../../util/addEllipsis"

class NoteSummary extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.onClickSummary(this.props.note)
  }

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

  buildTagList(tags){
    return (
      <Tags
        className={"note-summary-tag"}
        prefix={"Tags:"}
        tags={tags}
      />
    )
  }

  prepareDateText(date){
    return <p>{"Date: " + date}</p>
  }

  render(){
    return (
      <div className="note-summary-frame" onClick={this.handleClick}>
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
