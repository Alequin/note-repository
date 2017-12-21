import {notesSchema} from "./../database/schema.js"

function createNotesTable(db){
  const notesColumns = notesSchema.columns
  const createNotesTable = (
    `CREATE TABLE ${notesSchema.name} (
      ${notesColumns[0].name} ${notesColumns[0].type} PRIMARY KEY,
      ${notesColumns[1].name} ${notesColumns[1].type},
      ${notesColumns[2].name} ${notesColumns[2].type}
    );`
  )
  return db.connect(createNotesTable)
}

export default createNotesTable
