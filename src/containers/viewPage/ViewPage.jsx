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

  render(){
    return (
      <div className="view-page-frame">
        <section>

        </section>

        <section>
          <MarkDown className="content" markDown={this.props.note.content} />
        </section>
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
