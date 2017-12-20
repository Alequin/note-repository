import React from "react"
import PropTypes from 'prop-types'

class Sources extends React.Component{

  prepareSource(source){
    return (
      <li>
        <a href={source.location}>
          {"Name: "+source.name}<br/>
          {"From: "+source.type}<br/>
          {"Link: "+source.location}
        </a>
      </li>
    )
  }

  prepareSourceList(sources){
    const sourceElements = sources.map((source) => {
      return this.prepareSource(source)
    })
    return (
      <ul>
        {sourceElements}
      </ul>
    )
  }

  render(){
    return (
      <div className={"sources-component" + " " + this.props.className}>

      </div>
    )
  }
}

Sources.propTypes = {
  className: PropTypes.string,
  sources: PropTypes.array
}

export default Sources
