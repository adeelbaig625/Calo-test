import { Router } from "express"
import jobController from "../controller/job.controller.js"
const jobRouter = Router()
jobRouter.post("/", (req, res) => jobController.create(req, res))

jobRouter.get("/", (req, res) => jobController.get(req, res))

export default jobRouter
