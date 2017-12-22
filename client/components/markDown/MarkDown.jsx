import React from "react"
import PropTypes from 'prop-types'
import marked from 'marked'

class MarkDown extends React.Component{
  render(){
    return (
      <div className={this.props.className}>
        <div dangerouslySetInnerHTML={{__html: marked(this.props.markDown)}}></div>
      </div>
    )
  }
}

MarkDown.propTypes = {
  markDown: PropTypes.string,
  className: PropTypes.string
}

export default MarkDown
