import express from 'express'
import path from 'path'
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

router.post("/", function(req, res, next){
  console.log(req.body);
  res.json({test: req.body})
})

export default router
