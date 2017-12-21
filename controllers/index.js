import express from 'express'
import path from 'path'

const router = new express.Router();

router.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'))
})

export default router
