import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selection_page/SelectionPage.jsx"

//DEV TO REMOVE
import fakeSummaryData from "./../../dev/fakeSummaryNotesData.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      noteSummaries: fakeSummaryData
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
