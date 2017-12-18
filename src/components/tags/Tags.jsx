import React from "react"
import PropTypes from 'prop-types'

class Tags extends React.Component{

  constructor(props){
    super(props)
  }

  buildTags(className, prefix, tags){
    const elements = [
      <span key="-1" className={className}>{prefix}</span>
    ]
    let key = 0
    for(let tag of tags){
      elements.push(
        <span
          key={key++}
          className={className}>
            {tag}
        </span>
      )
    }
    return elements
  }

  render(){
    return (
      <div className="tags-frame">

      </div>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array,
  className: PropTypes.string,
  prefix: PropTypes.string
}

export default Tags
