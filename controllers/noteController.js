import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import {requestSummaryNotesWithTags} from "./../models/repos/notesRepo.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  requestSummaryNotesWithTags().then((notes) => {res.json(notes)})
})

export default router
