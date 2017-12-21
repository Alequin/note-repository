import PostgresConnector from "./../../services/PostgresConnector.js"
import {databaseInfo} from "./../../settings.js"

import notesTableSeeds from "./notesTableSeeds.js"
import tagsTableSeeds from "./tagsTableSeeds.js"

import {
  notesSchema,
  tagsSchema,
} from "./../../database/schema.js"

const db = new PostgresConnector(databaseInfo.path)

function seedNotesTable(){
  const notesColumns = notesSchema.columns
  const promises = []
  for(let note of notesTableSeeds){
    const command = `INSERT INTO ${notesSchema.name} `+
      `(${notesColumns[1].name},
        ${notesColumns[2].name},
        ${notesColumns[3].name},
        ${notesColumns[4].name}) `+
      "VALUES "+
      `($1, $2, $3, $4);`
    const values = [
      note.title, note.summary, note.file, note.creationDate
    ]
    promises.push(db.connect(command, values))
  }
  return Promise.all(promises)
}

function seedTagsTable(){
  const tagsColumns = tagsSchema.columns
  const promises = []
  for(let tag of tagsTableSeeds){
    const command = `INSERT INTO ${tagsSchema.name} `+
      `(${tagsColumns[1].name})`+
      "VALUES "+
      `($1);`
    const values = [tag.name]
    promises.push(db.connect(command, values))
  }
  return Promise.all(promises)
}

seedNotesTable()
  .then(() => {
    return seedTagsTable()
  })
