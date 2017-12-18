import React from "react"
import PropTypes from 'prop-types'
import MarkDown from "./../../components/markDown/MarkDown.jsx"

class View extends React.Component{

  prepareHeader(title, summary){
    return (
      <div className="note-header">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    )
  }

  prepareContent(markDown){
    return (
      <MarkDown
        className="content"
        markDown={markDown}
      />
    )
  }

  prepareDetails(date, tags, sources){
    return (
      <div className="detail-frame">
        <p>{"Date: " + date}</p>
        <hr/>
        <p>Tags: tag1, tag2, tag3</p>
        <hr/>
        <p>Sources</p>
        <ul>
          <li>Source1, Internet, <a href="www.a.com">www.a.com</a></li>
          <li>Source2, Book, <a href="#">N/A</a></li>
        </ul>
      </div>
    )
  }

  render(){
    return (
      <div className="view-page-frame">
        <section>
          {this.prepareHeader(
            this.props.note.title,
            this.props.note.summary
          )}
        </section>

        <section>
          {this.prepareContent(this.props.note.content)}
        </section>
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
