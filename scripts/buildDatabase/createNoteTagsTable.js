import {
  notesSchema,
  tagsSchema,
  noteTagsSchema
} from "./../../database/schema.js"

function createNoteTagsTable(db){
  const noteTagsColumns = noteTagsSchema.columns
  const createTable = (
    `CREATE TABLE ${noteTagsSchema.name} (
      ${noteTagsColumns[0].name} ${noteTagsColumns[0].type} PRIMARY KEY,
      ${noteTagsColumns[1].name} ${noteTagsColumns[1].type}
      REFERENCES ${notesSchema.name}(${notesSchema.columns[0].name}),
      ${noteTagsColumns[2].name} ${noteTagsColumns[2].type}
      REFERENCES ${tagsSchema.name}(${tagsSchema.columns[0].name})
    );`
  )
  return db.connect(createTable)
}

export default createNoteTagsTable
