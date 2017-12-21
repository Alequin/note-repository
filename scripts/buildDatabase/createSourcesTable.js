import {
  sourcesSchema
} from "./../../database/schema.js"

function createSourcesTable(db){
  const sourcesColumns = sourcesSchema.columns
  const createTable = (
    `CREATE TABLE ${sourcesSchema.name} (
      ${sourcesColumns[0].name} ${sourcesColumns[0].type} PRIMARY KEY,
      ${sourcesColumns[1].name} ${sourcesColumns[1].type},
      ${sourcesColumns[2].name} ${sourcesColumns[2].type},
      ${sourcesColumns[3].name} ${sourcesColumns[3].type}
    );`
  )
  return db.connect(createTable)
}

export default createSourcesTable
