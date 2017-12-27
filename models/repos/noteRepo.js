import accessDatabase from "./../../database/accessDatabase.js"
import Note from "./../Note.js"
import {
  notesSchema,
  tagsSchema,
  sourceSchema,
  noteTagsSchema,
  sourceTagsSchema
} from "./../../database/schema.js"

export const requestNoteById = function(id){

}

export const mapNoteRowToModel = function(noteData, noteSchema){
  return new Note({
    title: noteData[noteSchema.title.name],
    summary: noteData[noteSchema.summary.name],
    file: noteData[noteSchema.file.name],
  })
}
