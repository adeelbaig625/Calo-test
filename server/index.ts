import express from "express"
import jobRouter from "./routes/job.routes"
import cors from "cors"
import AppConfig from "./config/app.config" // Use ES module import syntax
import bodyParser from "body-parser"
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use("/jobs", jobRouter)

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.listen(AppConfig.APP.PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${AppConfig.APP.PORT}`
  )
})
