import express from "express";
import {loadDetails} from '../controllers/vidController.js'

console.log(process.env.YOUTUBE_API_KEY)


const router = express.Router();

router.post('/details',loadDetails)

export default router