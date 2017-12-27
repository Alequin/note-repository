import accessDatabase from "./../../database/accessDatabase.js"
import {attachTagsToNote} from "./tagRepo.js"
import {
  notesSchema,
  tagsSchema,
  noteTagsSchema,
} from "./../../database/schema.js"

export const requestSummaryNotesWithTags = function(){
  return requestSummaryNotes()
    .then((results) => {
      const promises = []
      for(let note of results.rows){
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
      ${notesCols.creationDate.name}
    FROM ${notes};`
  )
}
