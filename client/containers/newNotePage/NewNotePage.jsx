import React from "react"
import PropTypes from 'prop-types'
import axios from "axios"

import MarkDown from "./../../components/markDown/MarkDown.jsx"
import {renderDateFromString} from "./../../components/date/Date.jsx"
import Tags from "./../../components/tags/Tags.jsx"
import Sources from "./../../components/sources/Sources.jsx"
import Picker from "./../../components/picker/Picker.jsx"
import SourcePicker from "./../../components/sourcePicker/SourcePicker.jsx"

import {toggleItemPresenceInArray} from "./../../util/toggleItemPresenceInArray.js"

import {requestHeaders} from "./../../../settings.js"

class NewNotePage extends React.Component{

  constructor(props){
    super(props)

    this.onChangeTitleText = this.onChangeTitleText.bind(this)
    this.onChangeSummaryText = this.onChangeSummaryText.bind(this)
    this.onSelectFile = this.onSelectFile.bind(this)
    this.onClickTag = this.onClickTag.bind(this)
    this.onClickSource = this.onClickSource.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: "",
      summary: "",
      file: "",
      tags: [],
      allTags: [],
      sources: [],
      allSources: []
    }
  }

  componentDidMount(){
    const requestTags = axios({
      method: 'get',
      url: '/tags/names',
      headers: requestHeaders.auth
    })
    const requestSources = axios({
      method: 'get',
      url: '/sources',
      headers: requestHeaders.auth
    })

    Promise.all([requestTags, requestSources])
      .then((response) => {
        this.setState({
          allTags: response[0].data,
          allSources: response[1].data
        })
      })
  }

  onChangeTitleText(event){
    this.setState({
      title: event.target.value
    })
  }

  onChangeSummaryText(event){
    this.setState({
      summary: event.target.value
    })
  }

  onSelectFile(event){
    const reader = new FileReader();
    reader.onload = function(event) {
      this.setState({
        file: event.target.result
      })
    }.bind(this)
    reader.readAsText(event.target.files[0])
  }

  onClickTag(tag){
    console.log(this.state.tags);
    this.setState({tags: toggleItemPresenceInArray(this.state.tags, tag)})
  }

  onClickSource(source){
    console.log(this.state.sources);
    this.setState({sources: toggleItemPresenceInArray(this.state.sources, source)})
  }

  onSubmit(){
    axios({
      method: 'post',
      url: `/notes`,
      headers: requestHeaders.auth,
      data: this.state
    })
  }

  renderInputSection(header, value, onChange, rows){
    return (
      <div>
        <h2>{header}</h2>
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
        />
      </div>
    )
  }

  render(){
    return (
      <div className="new-note-page-frame">
        <div className="page-tile central-input-frame">
          {
            this.renderInputSection(
              "Title",
              this.state.title,
              this.onChangeTitleText,
              2
            )
          }
        </div>
        <div className="page-tile central-input-frame">
          {
            this.renderInputSection(
              "Summary",
              this.state.summary,
              this.onChangeSummaryText,
              6
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
        <div className="page-tile">
          <Picker items={this.state.allTags} onClickItem={this.onClickTag}/>
        </div>
        <div className="page-tile">
          <SourcePicker items={this.state.allSources} onClickItem={this.onClickSource}/>
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

export default NewNotePage
