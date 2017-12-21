import PostgresDatabaseConstructor from "./../../services/PostgresDatabaseConstructor"
import PostgresConnector from "./../../services/PostgresConnector.js"

import createNotesTable from "./createNotesTable.js"
import createTagsTable from "./createTagsTable.js"
import createSourcesTable from "./createSourcesTable.js"
import createNoteTagsTable from "./createNoteTagsTable.js"
import createNoteSourcesTable from "./createNoteSourcesTable.js"

import {databaseInfo} from "./../../settings.js"

const db = new PostgresConnector(databaseInfo.path)

const makeTable = (database, name, tableBuilder) => {
  const promise = tableBuilder(database)
  console.log(name + " table created")
  return promise
}

const dbBuilder = new PostgresDatabaseConstructor(databaseInfo.name, true)
dbBuilder.dropDb()
  .then(() => {
    return dbBuilder.createDb()
  })
  .then(() => {
    return makeTable(db, "Notes", createNotesTable)
  })
  .then(() => {
    return makeTable(db, "Tags", createTagsTable)
  })
  .then(() => {
    return makeTable(db, "Note Tags", createNoteTagsTable)
  })
  .then(() => {
    return makeTable(db, "Source", createSourcesTable)
  })
  .then(() => {
    return makeTable(db, "Note Source", createNoteSourcesTable)
  })
  .catch((err) => {
    console.log(err);
  })
