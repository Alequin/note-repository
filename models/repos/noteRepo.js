import accessDatabase from "./../../database/accessDatabase.js"
import Note from "./../Note.js"

export const requestNoteById = function(id){

}

export const mapNoteRowToModel = function(noteData, noteSchema){
  return new Note({
    id: noteData[noteSchema.columns.id.name],
    title: noteData[noteSchema.columns.title.name],
    summary: noteData[noteSchema.columns.summary.name],
    file: noteData[noteSchema.columns.file.name],
  })
}
