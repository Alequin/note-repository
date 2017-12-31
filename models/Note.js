import fs from "fs"

class Note{
  constructor(options = {}){
    this.id = options.id
    this.title = options.title
    this.creationDate = options.creationDate
    this.summary = options.summary
    this.file = options.file
    this.tags = options.tags || []
    this.sources = options.sources || []
  }

  setTags(tags){
    this.tags = tags || []
  }

  setSources(sources){
    this.sources = sources || []
  }
}

export default Note
