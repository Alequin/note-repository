import React from "react"
import PropTypes from 'prop-types'

class Tags extends React.Component{

  constructor(props){
    super(props)
  }

  buildTag(key, className, content){
    return (
      <span
        key={key}
        className={"tag " + className}>
          {content}
      </span>
    )
  }

  buildTags(className, prefix, tags){
    const elements = [
      <span key="-1" className={className}>{prefix}</span>
    ]
    let key = 0
    for(let tag of tags){
      elements.push(this.buildTag(key++, className, tag.name))
    }
    return elements
  }

  render(){
    return (
      <div className="tags-frame">
        {this.buildTags(
          this.props.className,
          this.props.prefix,
          this.props.tags
        )}
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
