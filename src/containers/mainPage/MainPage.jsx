import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selectionPage/SelectionPage.jsx"
import ViewPage from "./../viewPage/ViewPage.jsx"
import Pages from "./Pages.js"

//DEV TO REMOVE
import {mockNoteSummeries2, mockFullNote1} from "./../../dev/fakeSummaryNotesData.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickSummaryNote = this.onClickSummaryNote.bind(this)
    this.state = {
      pageToShow: Pages.selection,
      noteSummaries: [],
      currentNote: {}
    }
  }

  componentDidMount(){
    this.setState({noteSummaries: mockNoteSummeries2})
  }

  onClickSummaryNote(selected){
    this.setState({
      pageToShow: Pages.view,
      currentNote: mockFullNote1,
    })
  }

  renderPage(page){
    switch(page){
      case Pages.selection:
        return (
          <SelectionPage
            onClickSummary={this.onClickSummaryNote}
            notes={this.state.noteSummaries}
          />
        )
      case Pages.view:
        return <ViewPage note={this.state.currentNote}/>
    }
  }

  render(){
    return (
      <div className="main-page-frame">
          <Nav/>
          {this.renderPage(this.state.pageToShow)}
      </div>
    )
  }
}

export default MainPage
