import express from 'express'
import path from 'path'

import noteController from "./noteController.js"

const router = new express.Router();

router.use("/notes", noteController);

router.get('/', function(req, res, next){
  console.log(req.body);
})

export default router
