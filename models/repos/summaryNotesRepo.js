import accessDatabase from "./../../database/accessDatabase.js"
import {attachTagsToNote} from "./tagRepo.js"
import {mapNoteRowToModel} from "./noteRepo.js"
import {
  notesSchema,
  tagsSchema,
  noteTagsSchema,
} from "./../../database/schema.js"

export const requestSummaryNotesWithTags = function(){
  return requestSummaryNotes()
    .then((notes) => {
      const promises = []
      for(let note of notes){
        promises.push(attachTagsToNote(note))
      }
      return Promise.all(promises)
    })
    .then((results) => {
      return results
    })
    .catch((err) => {
      console.log(err)
    })
}

export const requestSummaryNotes = function(){
  const notes = notesSchema.name
  const notesCols = notesSchema.columns

  return accessDatabase.connect(
    `SELECT
      ${notesCols.id.name},
      ${notesCols.title.name},
      ${notesCols.summary.name},
      TO_CHAR(
        ${notesCols.creationDate.name} :: DATE, 'yyyy-mm-dd'
      ) AS ${notesCols.creationDate.name}
    FROM ${notes};`
  ).then((notes) => {
    notes = notes.rows
    return notes.map((note) => {
      return mapNoteRowToModel(note, notesSchema)
    })
  })
}
