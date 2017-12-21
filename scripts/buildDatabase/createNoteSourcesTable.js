import {
  notesSchema,
  sourcesSchema,
  noteSourcesSchema
} from "./../../database/schema.js"

function createNoteSourcesTable(db){
  const noteSourcesColumns = noteSourcesSchema.columns
  const createTable = (
    `CREATE TABLE ${noteSourcesSchema.name} (
      ${noteSourcesColumns[0].name} ${noteSourcesColumns[0].type} PRIMARY KEY,
      ${noteSourcesColumns[1].name} ${noteSourcesColumns[1].type}
      REFERENCES ${notesSchema.name}(${notesSchema.columns[0].name}),
      ${noteSourcesColumns[2].name} ${noteSourcesColumns[2].type}
      REFERENCES ${sourcesSchema.name}(${sourcesSchema.columns[0].name})
    );`
  )
  return db.connect(createTable)
}

export default createNoteSourcesTable
