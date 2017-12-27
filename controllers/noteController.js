import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import {requestSummaryNotesWithTags} from "./../models/repos/summaryNotesRepo.js"
import {requestFullNoteById} from "./../models/repos/noteRepo.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  requestSummaryNotesWithTags().then((notes) => {res.json(notes)})
})

router.get('/:id', requestAuth, function(req, res, next){
  requestFullNoteById(req.params.id)
    .then((note) => {res.json(note)})
})

export default router
