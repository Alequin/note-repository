import accessDatabase from "./../../database/accessDatabase.js"
import Note from "./../Note.js"
import {attachTagsToNote} from "./tagRepo.js"
import {attachSourcesToNote} from "./sourceRepo.js"
import {
  notesSchema
} from "./../../database/schema.js"

export const requestFullNoteById = function(id){
  return requestNoteById(id)
    .then((note) => {
      return note.loadContent()
    })
    .then((note) => {
      console.log("note:", note);
      return attachTagsToNote(note)
    })
    .then((note) => {
      return attachSourcesToNote(note)
    })
    .catch((err) => {
      console.log(err);
    })
}

export const requestNoteById = function(id){
  const notesCols = notesSchema.columns
  return accessDatabase.connect(
    `SELECT
      ${notesCols.id.name},
      ${notesCols.title.name},
      ${notesCols.summary.name},
      ${notesCols.file.name},
      TO_CHAR(
        ${notesCols.creationDate.name} :: DATE, 'yyyy-mm-dd'
      ) AS ${notesCols.creationDate.name}
    FROM ${notesSchema.name}
    WHERE ${notesCols.id.name} = ${id};`
  ).then((note) => {
    return mapNoteRowToModel(note.rows[0], notesSchema)
  })
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
