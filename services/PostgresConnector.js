const pg = require('pg')

function PostgresConnector(path){
  this.connectionString = path
}

PostgresConnector.prototype.connect = function (command, values) {
  // https://node-postgres.com/guides/upgrading
  var pool = new pg.Pool({
      connectionString: this.connectionString
  })

  const promise = new Promise((resolve, reject) => {
    pool.connect().then((client) => {
      client.query(command, values, (err, res) => {
        values = values || []
        if (err) reject(err)
        else resolve(res)
        client.end()
      })
    })
  })

  return promise
}

module.exports = PostgresConnector
