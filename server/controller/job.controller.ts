import AppConfig from "../config/app.config"
import { UNSPLASH_API_URL } from "../constants"
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
        jobs[jobId].status = jobResultEnum.RESOLVED
        jobs[jobId].result = photoUrl

        saveJobs(jobs)

        console.log("[LOG] Job executed")
      }
    }, delay * 1000)
  }

  private _fetchRandomPhoto = async (): Promise<string | null> => {
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
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

  create = async (req, res) => {
    const { name } = req.body
    const jobId = createJob({
      name,
      result: null,
      status: jobResultEnum.PENDING,
    })
    this._executeJob(jobId)
    return res.json({ jobId })
  }

  get = (req, res) => {
    const whereParams: JobWhereParams = req.query
    let jobs: jobType[] = getJobs(whereParams)
    let response: Partial<jobType>[] = []
    if (Object.values(jobs).length) {
      response = Object.values(jobs).map((job: jobType) =>
        job.status === jobResultEnum.PENDING ? { status: job.status } : job
      )
    }

    return res.json(response)
  }

  getById = (req: Request, res: Response) => {
    const { id } = req.params
    let job = getJobs({ id })
    if (!job) {
      return res.status(404).send("Job not found")
    }

    return res.json(job)
  }
}

export default new JobController()
