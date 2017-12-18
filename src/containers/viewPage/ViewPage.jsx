import React from "react"
import PropTypes from 'prop-types'
import marked from 'marked';

class View extends React.Component{
  render(){
    return (
      <div className="view-page-frame">
        <div dangerouslySetInnerHTML={{__html: marked(this.props.note.content)}}></div>
      </div>
    )
  }
}

View.propTypes = {
  note: PropTypes.object
}

export default View
