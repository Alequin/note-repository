
class Note{
  constructor(options = {}){
    this.id = options.id
    this.title = options.title
    this.summary = options.summary
    this.file = options.file
    this.content = options.content
    this.tags = options.tags || []
    this.sources = options.sources || []
  }

  setTags(tags){
    this.tags = tags || []
  }
}

export default Note
