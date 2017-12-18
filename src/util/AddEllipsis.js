export const addEllipsis = function(text, charAt){
  if(charAt > text.length) return text
  return text.slice(0, charAt) + "..."
}
