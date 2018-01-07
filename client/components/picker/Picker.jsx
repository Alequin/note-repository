import React from "react"
import PropTypes from 'prop-types'
import PickerItem from "./PickerItem.jsx"

class Picker extends React.Component{

  constructor(props){
    super(props)
    this.onClickTag = this.onClickTag.bind(this)
  }

  onClickTag(tag){
    this.props.onClickTag(tag)
  }

  renderItem(key, item){
    return (
      <PickerItem key={key} item={item} onClickTag={this.onClickTag}/>
    )
  }

  renderItems(items){
    let key = 1
    const itemElements = items.map((item) => {
      return this.renderItem(key++, item)
    })
    return <div>{itemElements}</div>
  }

  render(){
    return (
      <div className="picker-frame">
        {this.renderItems(this.props.items)}
      </div>
    )
  }
}

Picker.propTypes = {
  items: PropTypes.array,
  onClickTag: PropTypes.func
}

export default Picker
