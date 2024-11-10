import AppConfig from "../config/app.config"
import { createJob, getJobs, saveJobs } from "../db"
import axios from "axios"
import { jobResultEnum, jobType, JobWhereParams } from "../db/type"
import { Request, Response } from "express"

class JobController {
  private _executeJob(jobId: string) {
    console.log("[LOG] Executing job")
    const delay = Math.floor(Math.random() * 10) * 5 + 5
    const jobs = getJobs()
    setTimeout(async () => {
      const photoUrl = await this._fetchRandomPhoto()
      if (photoUrl) {
        const jobIndex = jobs.findIndex((job) => job.id === jobId)
        if (jobIndex !== -1) {
          jobs[jobIndex].status = jobResultEnum.RESOLVED
          jobs[jobIndex].result = photoUrl
          saveJobs(jobs)
          console.log("[LOG] Job executed")
        }
      }
    }, delay * 1000)
  }

  private _fetchRandomPhoto = async (): Promise<string | null> => {
    try {
      const response = await axios.get(AppConfig.APP.UNSPLASH_API_URL, {
        params: { query: "food" },
        headers: {
          Authorization: `Client-ID ${AppConfig.APP.UNSPLASH_ACCESS_KEY}`,
        },
      })
      return response.data.urls.regular
    } catch (error) {
      console.error("Error fetching photo from Unsplash:", error)
      return null
    }
  }

  create = async (req: Request, res: Response) => {
    const { name } = req.body
    const jobId = createJob({
      name,
      result: null,
      status: jobResultEnum.PENDING,
    })
    this._executeJob(jobId)
    return res.json({ jobId })
  }

  get = (req: Request, res: Response) => {
    const whereParams: JobWhereParams = req.query
    const jobs: jobType[] = getJobs(whereParams)
    const response = jobs.map((job: jobType) =>
      job.status === jobResultEnum.PENDING ? { status: job.status } : job
    )
    return res.json(response)
  }

  getById = (req: Request, res: Response) => {
    const { id } = req.params
    const job = getJobs({ id }).find((job) => job.id === id)
    if (!job) {
      return res.status(404).send("Job not found")
    }
    return res.json(job)
  }
}

export default new JobController()
