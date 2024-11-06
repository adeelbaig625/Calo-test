import express from "express"
import dotenv from "dotenv"
import jobRouter from "./routes/job.routes.js"
dotenv.config()

const app = express()
const port = process.env.PORT
app.use("/job", jobRouter)
app.get("/", (req, res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
