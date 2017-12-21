import PostgresDatabaseConstructor from "./../services/PostgresDatabaseConstructor"
import PostgresConnector from "./../services/PostgresConnector.js"
import createNotesTable from "./createNotesTable.js"

const databaseName = "noteRepo"
const db = new PostgresConnector(
  "postgres://localhost/" + databaseName
)

const dbBuilder = new PostgresDatabaseConstructor(databaseName, true)
dbBuilder.dropDb()
  .then(() => {
    return dbBuilder.createDb()
  })
  .then(() => {
    const promise = createNotesTable(db)
    console.log("Notes table created");
    return promise
  })
