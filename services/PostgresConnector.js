import pg from 'pg'

class PostgresConnector{
  constructor(path){
    this.path = path
  }

  connect(command, values) {
    // https://node-postgres.com/guides/upgrading
    const pool = new pg.Pool({
        connectionString: this.path
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

}

export default PostgresConnector
