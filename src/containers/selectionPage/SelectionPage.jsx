import React from "react"
import PropTypes from 'prop-types'
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

class SelectionPage extends React.Component{

  buildSingleSummary(key, note){
    return <NoteSummary key={key} note={note}/>
  }

  buildSummaries(notes){
    let key = 0
    const summaries = notes.map((note) => {
      return this.buildSingleSummary(key++, note)
    })
    return summaries
  }

  render(){
    return (
      <div className="selection-page-frame">
        {this.buildSummaries(this.props.notes)}
      </div>
    )
  }
}

SelectionPage.propTypes = {
  notes: PropTypes.array,
}

export default SelectionPage
