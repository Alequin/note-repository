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

  render(){
    return (
      <div className="view-page-frame">
        <section>

        </section>

        <section>

        </section>
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
