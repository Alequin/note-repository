import express from 'express'

import noteController from "./noteController.js"
import tagsController from "./tagsController.js"

const router = new express.Router();

router.use("/notes", noteController);
router.use("/tags", tagsController);

export default router
