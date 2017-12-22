import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import accessDatabase from "./../database/accessDatabase.js"
import {
  notesSchema,
  tagsSchema,
  noteTagsSchema,
} from "./../database/schema.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  // return all notes with with tags
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
  accessDatabase.connect(notesSqlCommand)
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
      res.json(returnedNotes)
    })
    .catch((err) => {
      console.log(err)
    })
})

export default router
