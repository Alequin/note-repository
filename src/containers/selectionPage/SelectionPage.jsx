import React from "react"
import PropTypes from 'prop-types'
import NoteSummary from "./../../components/noteSummary/NoteSummary.jsx"

class SelectionPage extends React.Component{
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
