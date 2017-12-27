import React from "react"
import PropTypes from 'prop-types'
import axios from "axios"

import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {renderDateFromString} from "./../../components/date/Date.jsx"
import Tags from "./../../components/tags/Tags.jsx"
import Sources from "./../../components/sources/Sources.jsx"
import {requestHeaders} from "./../../../settings.js"

class NewNotePAge extends React.Component{

  constructor(props){
    super(props)

    this.onSelectFile = this.onSelectFile.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: "",
      summary: "",
      file: "",
      contents: "",
      tags: [],
      sources: []
    }
  }

  onSelectFile(event){
    const file = event.target.value.split("\\")
    const fileName = file[file.length-1]

    const reader = new FileReader();
    reader.onload = function(event) {
      this.setState({
        file: fileName,
        contents: event.target.result
      })
    }.bind(this)
    reader.readAsText(event.target.files[0])
  }

  onSubmit(){
    axios({
      method: 'post',
      url: `/notes`,
      headers: requestHeaders.auth,
      data: this.state
    })
  }

  renderTitleInput(value, onChange){
    return (
      <div>
        <h2>Title</h2>
        <input type="text" value={value} onChange={onChange}/>
      </div>
    )
  }

  render(){
    return (
      <div className="new-note-page-frame">
        <div className="page-tile central-input-frame">
          {
            this.renderTitleInput(
              this.state.title, this.onChangeTitleText
            )
          }
        </div>
        <div className="page-tile central-input-frame">
          <input
            className="file-input"
            onChange={this.onSelectFile}
            type="file"
          />
        </div>
        <div className="page-tile central-input-frame">
          <input
            value="Submit"
            type="submit"
            onClick={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

export default NewNotePAge
