import React from "react"
import Nav from "./../nav/Nav.jsx"
import SelectionPage from "./../selection_page/SelectionPage.jsx"

class MainPage extends React.Component{
  render(){
    return (
      <div className="main-page-frame">
          <Nav/>
          <SelectionPage/>
      </div>
    )
  }
}

export default MainPage
