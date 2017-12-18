import React from 'react'

export const makeTagElements = function(className, prefix, tags){
  const elements = [
    <span key="-1" className={className}>{prefix}</span>
  ]
  let key = 0
  for(let tag of tags){
    elements.push(
      <span
        key={key++}
        className={className}>
          {tag}
      </span>
    )
  }
  return elements
}
