import React from "react"
import PropTypes from 'prop-types'
import Tags from "./../../components/tags/Tags.jsx"
import Date from "./../../components/date/Date.jsx"
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

  render(){
    const splitDate = this.props.note.creationDate.split("-")
    return (
      <div className="note-summary-frame" onClick={this.handleClick}>
        <hr/>
        {this.prepareTitle(this.props.note.title)}
        <hr/>
        {this.prepareSummaryText(this.props.note.summary, 100)}
        <hr/>
        {this.buildTagList(this.props.note.tags)}
        <hr/>
        <span>Date: </span>
        <Date
          className={"summary-date"}
          year={parseInt(splitDate[0])}
          month={parseInt(splitDate[1])}
          day={parseInt(splitDate[2])}
        />
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
