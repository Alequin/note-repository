import express from 'express'
import path from 'path'

import noteController from "./noteController.js"

const router = new express.Router();

router.use("/notes", noteController);

router.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'))
})

export default router
