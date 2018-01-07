import accessDatabase from "./../../database/accessDatabase.js"
import {
  sourcesSchema,
  noteSourcesSchema,
} from "./../../database/schema.js"

export const requestAllSources = function(){
  return accessDatabase.connect(
    `SELECT * FROM ${sourcesSchema.name};`
  ).then((sources) => {
    return sources.rows
  })
}

export const findSourcesOfNote = function(note){
  const sources = sourcesSchema.name
  const sourcesCols = sourcesSchema.columns

  const noteSources = noteSourcesSchema.name
  const noteSourcesCols = noteSourcesSchema.columns

  return accessDatabase.connect(
    `SELECT
      ${sources}.${sourcesCols.name.name},
      ${sources}.${sourcesCols.type.name},
      ${sources}.${sourcesCols.location.name}
    FROM ${sources} INNER JOIN ${noteSources}
    ON ${sources}.${sourcesCols.id.name} = ${noteSources}.${noteSourcesCols.sourceId.name}
    WHERE ${noteSources}.${noteSourcesCols.noteId.name} = ${note.id}`
  ).then((sources) => {
    return sources.rows
  })
}

export const attachSourcesToNote = function(note){
  return findSourcesOfNote(note)
    .then((sources) => {
      note.setSources(sources)
      return note
    })
}
