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

  onClickTag(){
    this.props.onClickTag(this.props.item)
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
    return this.renderItem(this.props.item)
  }
}

PickerItem.propTypes = {
  item: PropTypes.string,
  onClickTag: PropTypes.func
}

export default PickerItem
