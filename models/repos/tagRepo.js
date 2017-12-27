import accessDatabase from "./../../database/accessDatabase.js"
import {
  tagsSchema,
  noteTagsSchema,
} from "./../../database/schema.js"

export const findTagsOfNote = function(note){
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
    return tags.rows
  })
}

export const attachTagsToNote = function(note){
  return findTagsOfNote(note)
    .then((tags) => {
      note.setTags(tags)
      return note
    })
}
