import {tagsSchema} from "./../database/schema.js"

function createTagsTable(db){
  const tagsColumns = tagsSchema.columns
  const createTagsTable = (
    `CREATE TABLE ${tagsSchema.name} (
      ${tagsColumns[0].name} ${tagsColumns[0].type} PRIMARY KEY,
      ${tagsColumns[1].name} ${tagsColumns[1].type}
    );`
  )
  return db.connect(createTagsTable)
}

export default createTagsTable
