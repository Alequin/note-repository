import PostgresDatabaseConstructor from "./../services/PostgresDatabaseConstructor"
import PostgresConnector from "./../services/PostgresConnector.js"
const schema = require("./../database/schema.js")

const createNotesTable = require("./createNotesTable.js")

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
    const promise = createNotesTable(db, schema.notesTable)
    console.log("Notes table created");
    return promise
  })
