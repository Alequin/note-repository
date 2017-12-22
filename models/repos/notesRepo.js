import accessDatabase from "./../../database/accessDatabase.js"
import {
  notesSchema,
  tagsSchema,
  noteTagsSchema,
} from "./../../database/schema.js"

export const requestNotes = function(){
  const notes = notesSchema.name
  const notesCols = notesSchema.columns

  const tags = tagsSchema.name
  const tagsCols = tagsSchema.columns

  const noteTags = noteTagsSchema.name
  const noteTagsCols = noteTagsSchema.columns

  const notesSqlCommand = (
    `SELECT
      ${notesCols.id.name},
      ${notesCols.title.name},
      ${notesCols.summary.name},
      ${notesCols.creationDate.name}
    FROM ${notes};`
  )

  let returnedNotes
  const promise = accessDatabase.connect(notesSqlCommand)
    .then((results) => {
      const promises = []
      returnedNotes = results.rows
      for(let note of returnedNotes){
        const tagsSqlCommand = (
          `SELECT ${tags}.${tagsCols.name.name} FROM ${tags}
          INNER JOIN ${noteTags}
          ON ${tags}.${tagsCols.id.name} = ${noteTags}.${noteTagsCols.tagId.name}
          WHERE ${tags}.${tagsCols.id.name} = ${note.id}`
        )
        promises.push(accessDatabase.connect(tagsSqlCommand))
      }
      return Promise.all(promises)
    })
    .then((results) => {
      for(let j=0; j<results.length; j++){
        returnedNotes[j].tags = results[j].rows
      }
      return returnedNotes
    })
    .catch((err) => {
      console.log(err)
    })
    return promise
}
