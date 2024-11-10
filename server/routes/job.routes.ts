import { Request, Response, Router } from "express"
import jobController from "../controller/job.controller"
const jobRouter = Router()
jobRouter.post("/", (req, res) => {
  jobController.create(req, res)
})

jobRouter.get("/", (req: Request, res: Response) => {
  jobController.get(req, res)
})
jobRouter.get("/:id", (req: Request, res: Response) => {
  jobController.getById(req, res)
})

export default jobRouter
