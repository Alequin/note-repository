import React from "react"
import PropTypes from 'prop-types'
import Picker from "./../picker/Picker.jsx"
import PickerItem from "./../picker/PickerItem.jsx"

class SourcePicker extends Picker{
  renderItem(key, item){
    const source = item.name + " - " + item.type
    return (
      <PickerItem key={key} item={source} onClickItem={this.onClickItem}/>
    )
  }
}

SourcePicker.propTypes = {
  items: PropTypes.array,
  onClickItem: PropTypes.func
}

export default SourcePicker
