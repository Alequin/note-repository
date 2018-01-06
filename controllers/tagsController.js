import express from 'express'
import requestAuth from "./../services/requestAuth.js"
import {requestAllTags} from "./../models/repos/tagRepo.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  requestAllTags().then((tags) => {res.json(tags)})
})

export default router
