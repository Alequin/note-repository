import React from "react"
import PropTypes from 'prop-types'
import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {renderDateFromString} from "./../../components/date/Date.jsx"
import Tags from "./../../components/tags/Tags.jsx"
import Sources from "./../../components/sources/Sources.jsx"

class View extends React.Component{

  prepareHeader(title, summary){
    return (
      <div className="view-page-tile note-header">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    )
  }

  prepareContent(markDown){
    return (
      <MarkDown
        className="view-page-tile content-frame"
        markDown={markDown}
      />
    )
  }

  prepareDetails(date, tags, sources){
    return (
      <div className="view-page-tile detail-frame">
        {renderDateFromString("details-date", "Date: ", date)}
        <hr/>
        <Tags
          className={"note-summary-tag"}
          prefix={"Tags:"}
          tags={tags}
        />
        <hr/>
        <p>Sources</p>
        <Sources sources={sources}/>
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

        <section>
          {this.prepareDetails(
            this.props.note.creationDate,
            this.props.note.tags,
            this.props.note.sources
          )}
        </section>
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
