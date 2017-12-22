import express from 'express'
import requestAuth from "./../services/requestAuth.js"

const router = new express.Router();

router.get('/', requestAuth, function(req, res, next){
  res.json({out: "hey"})
})

export default router
