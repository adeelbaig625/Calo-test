import { createJob, getJobs } from "../db/index.js"
class JobController {
  create = (req, res) => {
    const jobId = createJob()
    res.json({ jobId })
  }

  get = (req, res) => {
    let jobs = getJobs()
    if (Object.values(jobs).length) {
      jobs = Object.values(jobs).map((job) => job)
    }
    res.json(jobs)
  }
}

export default new JobController()
