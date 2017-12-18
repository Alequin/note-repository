import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selectionPage/SelectionPage.jsx"

//DEV TO REMOVE
import {mockNoteSummeries2} from "./../../dev/fakeSummaryNotesData.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      noteSummaries: mockNoteSummeries2
    }
  }

  render(){
    return (
      <div className="main-page-frame">
          <Nav/>
          <SelectionPage notes={this.state.noteSummaries}/>
      </div>
    )
  }
}

export default MainPage
