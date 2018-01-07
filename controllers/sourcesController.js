import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import {requestAllSources} from "./../models/repos/sourceRepo.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  requestAllSources().then((sources) => {res.json(sources)})
})

export default router
