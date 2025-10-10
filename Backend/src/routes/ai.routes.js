import express from 'express'
import aiResponse from '../controllers/ai.controller.js'

const router = express.Router()


router.get("/get-response", aiResponse )
router.post("/get-response", aiResponse )

export default router;