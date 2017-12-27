import fs from "fs"

class Note{
  constructor(options = {}){
    this.id = options.id
    this.title = options.title
    this.creationDate = options.creationDate
    this.summary = options.summary
    this.file = options.file
    this.content = options.content || ""
    this.tags = options.tags || []
    this.sources = options.sources || []
  }

  setTags(tags){
    this.tags = tags || []
  }

  setSources(sources){
    this.sources = sources || []
  }

  loadContent(){
    return new Promise(function(resolve, reject){
      fs.readFile(`./markDown/${this.file}`, 'utf8',
        (err, data) => {
          if (err) reject(err)
          this.content = data
          resolve(this)
        }
      )
    }.bind(this))
  }
}

export default Note
