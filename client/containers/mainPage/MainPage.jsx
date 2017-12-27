import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selectionPage/SelectionPage.jsx"
import ViewPage from "./../viewPage/ViewPage.jsx"
import NewNotePage from "./../newNotePage/NewNotePage.jsx"
import Pages from "./Pages.js"
import axios from "axios"
import {requestHeaders} from "./../../../settings.js"
import {navOptions} from "./../nav/navOptions.js"

//DEV TO REMOVE
import {mockNoteSummeries2, mockFullNote1} from "./../../dev/fakeSummaryNotesData.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickNavBarLink = this.onClickNavBarLink.bind(this)
    this.onClickSummaryNote = this.onClickSummaryNote.bind(this)
    this.state = {
      pageToShow: Pages.selection,
      noteSummaries: [],
      currentNote: {}
    }
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: '/notes',
      headers: requestHeaders.auth
    }).then((notes) => {
      this.setState({noteSummaries: notes.data})
    })
  }

  onClickSummaryNote(selected){
    axios({
      method: 'get',
      url: `/notes/${selected.id}`,
      headers: requestHeaders.auth
    }).then((note) => {
      this.setState({
        pageToShow: Pages.view,
        currentNote: note.data,
      })
    })
  }

  onClickNavBarLink(selected){
    let stateToSet
    switch(selected){
      case navOptions.home:
        this.switchToSelectionPage()
        break;
      case navOptions.newNote:
        this.switchToNewNotePage()
        break;
    }
  }

  switchToSelectionPage(){
    this.setState({
      pageToShow: Pages.selection
    })
  }

  switchToNewNotePage(){
    this.setState({
      pageToShow: Pages.newNote
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
      case Pages.newNote:
        return <NewNotePage/>
    }
  }

  render(){
    return (
      <div className="main-page-frame">
          <Nav onClickNavBarLink={this.onClickNavBarLink}/>
          {this.renderPage(this.state.pageToShow)}
      </div>
    )
  }
}

export default MainPage
