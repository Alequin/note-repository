import accessDatabase from "./../../database/accessDatabase.js"
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

export const attachTagsToNote = function(note){
  const tags = tagsSchema.name
  const tagsCols = tagsSchema.columns

  const noteTags = noteTagsSchema.name
  const noteTagsCols = noteTagsSchema.columns

  return accessDatabase.connect(
    `SELECT ${tags}.${tagsCols.name.name} FROM ${tags}
    INNER JOIN ${noteTags}
    ON ${tags}.${tagsCols.id.name} = ${noteTags}.${noteTagsCols.tagId.name}
    WHERE ${tags}.${tagsCols.id.name} = ${note.id}`
  ).then((tags) => {
    note.tags = tags.rows
    return note
  })
}
