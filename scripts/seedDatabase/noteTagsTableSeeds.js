import accessDatabase from "./../../database/accessDatabase.js"
import {newIntegerDice} from "./../../services/IntegerDice.js"

function makeNoteTagsRows(){
  const promises = [
    accessDatabase.connect("SELECT * FROM notes;"),
    accessDatabase.connect("SELECT * FROM tags;")
  ]
  const promise = Promise.all(promises)
    .then((results) => {
      const notes = results[0].rows
      const tags = results[1].rows
      return Promise.resolve(buildSeeds(notes, tags))
    }).catch((err) => {
      console.log(err)
    })

  return promise
}

function buildSeeds(notes, tags){
  let noteTagsSeeds = []
  for(let note of notes){
    const rows = newRowsForNote(note, tags)
    noteTagsSeeds = noteTagsSeeds.concat(rows)
  }
  return noteTagsSeeds
}

function newRowsForNote(note, tags){
  const rows = []

  const tagsDie = newIntegerDice(0, tags.length-1)
  const loop = newIntegerDice(1, 4).roll()
  for(let j=0; j<loop; j++){
    rows.push({
      noteId: note.id,
      tagId: tags[tagsDie.roll()].id
    })
  }
  return rows
}

export default makeNoteTagsRows
