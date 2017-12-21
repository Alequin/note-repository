import PostgresDatabaseConstructor from "./../services/PostgresDatabaseConstructor"
import PostgresConnector from "./../services/PostgresConnector.js"
import createNotesTable from "./createNotesTable.js"
import createTagsTable from "./createTagsTable.js"
import createNoteTagsTable from "./createNoteTagsTable.js"
import {databaseInfo} from "./../settings.js"

const db = new PostgresConnector(databaseInfo.path)

const dbBuilder = new PostgresDatabaseConstructor(databaseInfo.name, true)
dbBuilder.dropDb()
  .then(() => {
    return dbBuilder.createDb()
  })
  .then(() => {
    const promise = createNotesTable(db)
    console.log("Notes table created")
    return promise
  })
  .then(() => {
    const promise = createTagsTable(db)
    console.log("Tags table created")
    return promise
  })
  .then(() => {
    const promise = createNoteTagsTable(db)
    console.log("Note Tags table created")
  })
