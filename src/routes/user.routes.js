import { Router } from "express";
import {registerUser} from '../controllers/user.controller.js'
import uploadSingleFile from "../middlewares/multerSingleFile.js"
import cloudinaryMiddleware from "../middlewares/imageUploader.js"

const router = Router()

router.route("/register").post(uploadSingleFile.single('profileImage') ,cloudinaryMiddleware, registerUser)

export default router


