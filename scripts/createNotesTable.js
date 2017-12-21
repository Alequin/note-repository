import {notesSchema} from "./../database/schema.js"

function createNotesTable (db){
  const notesColumns = notesSchema.columns
  const createNoteTable = (
    `CREATE TABLE ${notesSchema.name} (
      ${notesColumns.id.name} ${notesColumns.id.type} PRIMARY KEY,
      ${notesColumns.title.name} ${notesColumns.title.type}
    );`
  )
  return db.connect(createNoteTable)
}

export default createNotesTable
