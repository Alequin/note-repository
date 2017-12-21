import accessDatabase from "./../../database/accessDatabase.js"
import {newIntegerDice} from "./../../services/IntegerDice.js"

function makeNoteTagsRows(){
  const promises = [
    accessDatabase.connect("SELECT * FROM notes;"),
    accessDatabase.connect("SELECT * FROM tags;")
  ]
  const promise = Promise.all(promises)
    .then((results) => {
      let noteTagsSeeds = []

      const notes = results[0].rows
      const tags = results[1].rows
      const tagsDie = newIntegerDice(0, tags.length-1)

      function newRowsForNote(note){
        const rows = []
        const tagCountDie = newIntegerDice(1, 4)
        const loop = tagCountDie.roll()
        for(let j=0; j<loop; j++){
          rows.push({
            noteId: note.id,
            tagId: tags[tagsDie.roll()].id
          })
        }
        return rows
      }

      for(let note of notes){
        const rows = newRowsForNote(note)
        noteTagsSeeds = noteTagsSeeds.concat(rows)
      }
      return Promise.resolve(noteTagsSeeds)
    }).catch((err) => {
      console.log(err)
    })

  return promise
}

export default makeNoteTagsRows
