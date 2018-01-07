import express from 'express'

import noteController from "./noteController.js"
import tagsController from "./tagsController.js"
import sourcesController from "./sourcesController.js"

const router = new express.Router();

router.use("/notes", noteController);
router.use("/tags", tagsController);
router.use("/sources", sourcesController);

export default router
