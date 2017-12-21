module.exports = function(db, notesSchema){
  const notesColumns = notesSchema.columns
  const createNoteTable = (
    `CREATE TABLE ${notesSchema.name} (
      ${notesColumns.id.name} ${notesColumns.id.type} PRIMARY KEY,
      ${notesColumns.title.name} ${notesColumns.title.type}
    );`
  )
  return db.connect(createNoteTable)
}
