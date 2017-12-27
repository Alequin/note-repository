import React from "react"
import PropTypes from 'prop-types'
import {navOptions} from "./navOptions.js"

class Nav extends React.Component{

  constructor(props){
    super(props)
    this.onClickHomeLink = this.onClickHomeLink.bind(this)
    this.onClickNewNoteLink = this.onClickNewNoteLink.bind(this)
  }

  onClickHomeLink(){
    this.props.onClickNavBarLink(navOptions.home)
  }

  onClickNewNoteLink(){
    this.props.onClickNavBarLink(navOptions.newNote)
  }

  render(){
    return (
      <div className="nav-bar-frame">

        <div className="nav-chain-frame">
          <img src={require("./../../../build/images/chain-crop-2.png")}/>
          <span className="nav-chain-spacing"></span>
          <img src={require("./../../../build/images/chain-crop-2.png")}/>
        </div>

        <nav>
          <div className="nav-buttons-frame">
            <div>
              <a onClick={this.onClickHomeLink}>Home</a>
              <a onClick={this.onClickNewNoteLink}>New Note</a>
            </div>
            <div>
              <a href="#">Select Filter Tags</a>
              <a href="#">Random Note</a>
            </div>
          </div>

          <div className="search-frame">
            <label>
              <input type="search"></input>
              <i className="search-icon fa fa-search"></i>
            </label>
          </div>
        </nav>

      </div>
    )
  }
}

Nav.propTypes = {
  onClickNavBarLink: PropTypes.func
}

export default Nav
