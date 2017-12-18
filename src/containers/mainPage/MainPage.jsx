import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selectionPage/SelectionPage.jsx"
import ViewPage from "./../viewPage/ViewPage.jsx"
import Pages from "./Pages.js"

//DEV TO REMOVE
import {mockNoteSummeries2} from "./../../dev/fakeSummaryNotesData.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      noteSummaries: []
    }
  }

  componentDidMount(){
    this.setState({noteSummaries: mockNoteSummeries2})
  }

  renderPage(page){
    switch(page){
      case Pages.selection:
        return <SelectionPage notes={this.state.noteSummaries}/>

    }
  }

  render(){
    return (
      <div className="main-page-frame">
          <Nav/>

      </div>
    )
  }
}

export default MainPage
