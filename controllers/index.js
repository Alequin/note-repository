import express from 'express'
import path from 'path'

import noteController from "./noteController.js"
import tagsController from "./tagsController.js"

const router = new express.Router();

router.use("/notes", noteController);
router.use("/tags", tagsController);

router.get('/', function(req, res, next){
  console.log(req.body);
})

export default router
