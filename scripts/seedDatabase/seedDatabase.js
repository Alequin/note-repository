import accessDatabase from "./../../database/accessDatabase.js"

import notesTableSeeds from "./notesTableSeeds.js"
import tagsTableSeeds from "./tagsTableSeeds.js"
import sourcesTableSeeds from "./sourcesTableSeeds.js"
import makeNoteTagsTableSeeds from "./noteTagsTableSeeds.js"

import {
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema
} from "./../../database/schema.js"

function run(){
  seed(notesInsertCommand(), notesInsertValues())
    .then(() => {
      console.log("Seed complete: notes tables");
      return seed(tagsInsertCommand(), tagsInsertValues())
    })
    .then(() => {
      console.log("Seed complete: tags tables");
      return seed(sourcesInsertCommand(), sourcesInsertValues())
    })
    .then(() => {
      console.log("Seed complete: source tables");
      return noteTagsInsertValues().then((values) => {
        return seed(noteTagsInsertCommand(), values)
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

function seed(command, values){
  const promises = []
  for(let value of values){
    promises.push(accessDatabase.connect(command, value))
  }
  return Promise.all(promises)
}

function notesInsertCommand(){
  const notesColumns = notesSchema.columns
  return (
    `INSERT INTO ${notesSchema.name}
    (${notesColumns[1].name},
     ${notesColumns[2].name},
     ${notesColumns[3].name},
     ${notesColumns[4].name})
    VALUES
    ($1, $2, $3, $4);`
  )
}

function notesInsertValues(){
  return notesTableSeeds.map((note) => {
    return [note.title, note.summary, note.file, note.creationDate]
  })
}

function tagsInsertCommand(){
  const tagsColumns = tagsSchema.columns
  return (
    `INSERT INTO ${tagsSchema.name}
    (${tagsColumns[1].name})
    VALUES
    ($1);`
  )
}

function tagsInsertValues(){
  return tagsTableSeeds.map((tag) => {
    return [tag.name]
  })
}

function sourcesInsertCommand(){
  const sourcesColumns = sourcesSchema.columns
  return (
    `INSERT INTO ${sourcesSchema.name}
    (${sourcesColumns[1].name},
     ${sourcesColumns[2].name},
     ${sourcesColumns[3].name})
    VALUES
    ($1, $2, $3);`
  )
}

function sourcesInsertValues(){
  return sourcesTableSeeds.map((source) => {
    return [source.name, source.type, source.location]
  })
}

function noteTagsInsertCommand(){
  const noteTagsColumns = noteTagsSchema.columns
  return (
    `INSERT INTO ${noteTagsSchema.name}
    (${noteTagsColumns[1].name},
     ${noteTagsColumns[2].name})
    VALUES
    ($1, $2);`
  )
}

function noteTagsInsertValues(){
  return makeNoteTagsTableSeeds()
    .then((rows) => {
      return rows.map((noteTag) => {
        return [noteTag.noteId, noteTag.tagId]
      })
    })
}

run()
