import notesTableSeeds from "./notesTableSeeds.js"
import PostgresConnector from "./../../services/PostgresConnector.js"
import {databaseInfo} from "./../../settings.js"

import {
  notesSchema
} from "./../../database/schema.js"

const db = new PostgresConnector(databaseInfo.path)

const notesColumns = notesSchema.columns
for(let note of notesTableSeeds){
  const command = `INSERT INTO ${notesSchema.name} `+
    `(${notesColumns[1].name},
      ${notesColumns[2].name},
      ${notesColumns[3].name},
      ${notesColumns[4].name}) `+
      "VALUES "+
      `($1, $2, $3, $4);`
  const values = [
    note.title, note.summary, note.file, note.creationDate
  ]
  db.connect(command, values)
}
