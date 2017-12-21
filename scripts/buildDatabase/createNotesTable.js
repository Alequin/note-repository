import {notesSchema} from "./../../database/schema.js"

function createNotesTable(db){
  const notesColumns = notesSchema.columns
  const createTable = (
    `CREATE TABLE ${notesSchema.name} (
      ${notesColumns[0].name} ${notesColumns[0].type} PRIMARY KEY,
      ${notesColumns[1].name} ${notesColumns[1].type},
      ${notesColumns[2].name} ${notesColumns[2].type},
      ${notesColumns[3].name} ${notesColumns[3].type},
      ${notesColumns[4].name} ${notesColumns[4].type}
    );`
  )
  return db.connect(createTable)
}

export default createNotesTable
