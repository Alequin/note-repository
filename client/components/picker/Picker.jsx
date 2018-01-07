import React from "react"
import PropTypes from 'prop-types'
import PickerItem from "./PickerItem.jsx"

class Picker extends React.Component{

  constructor(props){
    super(props)
    this.onClickItem = this.onClickItem.bind(this)
  }

  onClickItem(item){
    this.props.onClickItem(item)
  }

  renderItem(key, item){
    return (
      <PickerItem key={key} item={item} onClickItem={this.onClickItem}/>
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
  onClickItem: PropTypes.func
}

export default Picker
