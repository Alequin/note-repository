import {runCommand} from "./../services/UnixRunner.js"

class PostgresDatabaseConstructor{
  constructor(name, logOutput){
    this.name = name
    this.logOutput = logOutput || false
  }

  createDb(){
    return runCommand("createdb " + this.name)
      .then((result) => {
        if(this.logOutput) result.log()
      })
  }

  dropDb(){
    return runCommand("dropdb " + this.name)
      .then((result) => {
        if(this.logOutput) result.log()
      })
  }
}

export default PostgresDatabaseConstructor
