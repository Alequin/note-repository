const pg = require('pg')

function PostgresConnector(path){
  this.connectionString = path
}

PostgresConnector.prototype.connect = function (sql) {
  // https://node-postgres.com/guides/upgrading
  var pool = new pg.Pool({
      connectionString: this.connectionString
  })

  const promise = new Promise((resolve, reject) => {
    pool.connect().then((client) => {
      client.query(sql.command, sql.values, (err, res) => {
        if (err) reject(err)
        else resolve(res)
        client.end()
      })
    })
  })

  return promise
}

module.exports = PostgresConnector
