import React from "react"
import PropTypes from 'prop-types'

class PickerItem extends React.Component{

  constructor(props){
    super(props)
    this.onClickTag = this.onClickTag.bind(this)
    this.state = {
      highlighted: false
    }
  }

  onClickTag(event){
    const tag = event.target.innerHTML
    this.props.onClickTag(tag)
  }

  renderItem(item){
    return (
      <span
        className="picker-item"
        onClick={this.onClickTag}>
          {item}
      </span>
    )
  }

  render(){
    return (
      <div className="picker-frame">
        {this.renderItem(this.props.item)}
      </div>
    )
  }
}

PickerItem.propTypes = {
  items: PropTypes.array,
  onClickTag: PropTypes.func
}

export default PickerItem
