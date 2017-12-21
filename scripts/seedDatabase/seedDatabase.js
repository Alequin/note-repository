import PostgresConnector from "./../../services/PostgresConnector.js"
import {databaseInfo} from "./../../settings.js"

import notesTableSeeds from "./notesTableSeeds.js"
import tagsTableSeeds from "./tagsTableSeeds.js"

import {
  notesSchema,
  tagsSchema,
} from "./../../database/schema.js"

const db = new PostgresConnector(databaseInfo.path)

function run(){
  seed(notesInsertCommand(), notesInsertValues())
    .then(() => {
      return seed(tagsInsertCommand(), tagsInsertValues())
    })
    .then(() => {
      
    })
    .catch((err) => {
      console.log(err);
    })
}

function seed(command, values){
  const promises = []
  for(let value of values){
    promises.push(db.connect(command, value))
  }
  return Promise.all(promises)
}

function notesInsertCommand(){
  const notesColumns = notesSchema.columns
  return (
    `INSERT INTO ${notesSchema.name} `+
    `(${notesColumns[1].name},
      ${notesColumns[2].name},
      ${notesColumns[3].name},
      ${notesColumns[4].name}) `+
    "VALUES "+
    `($1, $2, $3, $4);`
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
    `INSERT INTO ${tagsSchema.name} `+
    `(${tagsColumns[1].name})`+
    "VALUES "+
    `($1);`
  )
}

function tagsInsertValues(){
  return tagsTableSeeds.map((tag) => {
    return [tag.name]
  })
}

run()
