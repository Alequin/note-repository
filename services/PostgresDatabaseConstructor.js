const runCommand = require("./../services/UnixRunner.js")

function PostgresDatabase(name, logOutput){
  this.name = name
  this.logOutput = logOutput || false
}

PostgresDatabase.prototype.createDb = function(){
  return runCommand("createdb " + this.name)
    .then((result) => {
      if(this.logOutput) result.log()
    })
}

PostgresDatabase.prototype.dropDb = function(){
  return runCommand("dropdb " + this.name)
    .then((result) => {
      if(this.logOutput) result.log()
    })
}

module.exports = PostgresDatabase
