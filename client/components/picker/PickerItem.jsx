import React from "react"
import PropTypes from 'prop-types'

class PickerItem extends React.Component{

  constructor(props){
    super(props)
    this.onClickItem = this.onClickItem.bind(this)
    this.state = {
      highlighted: false
    }
  }

  onClickItem(){
    this.setState({
      highlighted: !this.state.highlighted
    })
    this.props.onClickItem(this.props.item)
  }

  renderItem(item){
    let className = "picker-item"
    if(this.state.highlighted) className += " highlighted-picker-item"
    return (
      <span
        className={className}
        onClick={this.onClickItem}>
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
  onClickItem: PropTypes.func
}

export default PickerItem
