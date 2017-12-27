import accessDatabase from "./../../database/accessDatabase.js"
import Note from "./../Note.js"

export const requestNoteById = function(id){

}

export const mapNoteRowToModel = function(noteData, noteSchema){
  const {columns} = noteSchema
  return new Note({
    id: noteData[columns.id.name],
    title: noteData[columns.title.name],
    summary: noteData[columns.summary.name],
    file: noteData[columns.file.name],
    creationDate: noteData[columns.creationDate.name]
  })
}
