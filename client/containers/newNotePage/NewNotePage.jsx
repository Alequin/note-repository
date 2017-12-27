import React from "react"
import PropTypes from 'prop-types'
import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {renderDateFromString} from "./../../components/date/Date.jsx"
import Tags from "./../../components/tags/Tags.jsx"
import Sources from "./../../components/sources/Sources.jsx"

class NewNotePAge extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: "",
      summary: "",
      file: "",
      tags: [],
      sources: []
    }
  }

  render(){
    return (
      <div className="new-note-page-frame">

      </div>
    )
  }
}

export default NewNotePAge
