import React from "react"

class Nav extends React.Component{
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
              <a href="#">Home</a>
              <a href="#">Select Filter Tags</a>
            </div>
            <div>
              <a href="#">Clear Filter Tags</a>
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

export default Nav
