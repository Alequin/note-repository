
export const toggleItemPresenceInArray = function(items, item){
  const indexOfItem = items.indexOf(item)
  if(indexOfItem != -1){
    items.splice(indexOfItem, 1)
  }else{
    items.push(item)
  }
  return items
}
