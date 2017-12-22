import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import {requestNotes} from "./../models/repos/notesRepo.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  requestNotes().then((notes) => {res.json(notes)})
})

export default router
