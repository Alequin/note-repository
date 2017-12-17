import React from "react"
import PropTypes from 'prop-types'
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

class SelectionPage extends React.Component{

  buildSummaries(notes){
    let key = 0
    const summaries = notes.map((note) => {
      return <NoteSummary key={key++} note={note}/>
    })
    return summaries
  }

  render(){
    return (
      <div className="selection-page-frame">
        <NoteSummary/>
        <NoteSummary/>
      </div>
    )
  }
}

SelectionPage.propTypes = {
  notes: PropTypes.array,
}

export default SelectionPage
