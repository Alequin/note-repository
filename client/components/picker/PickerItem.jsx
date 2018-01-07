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
    this.setState({
      highlighted: !this.state.highlighted
    })
    this.props.onClickTag(this.props.item)
  }

  renderItem(item){
    let className = "picker-item"
    if(this.state.highlighted) className += " highlighted-picker-item"
    return (
      <span
        className={className}
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
