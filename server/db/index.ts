import fs from "fs"
import { v4 as uuidv4 } from "uuid"
import { JOBS_FILE } from "../constants"
import { jobType, JobWhereParams } from "./type"

export function getJobs(whereParams: JobWhereParams = {}) {
  try {
    const data = fs.readFileSync(JOBS_FILE, "utf-8")
    let jobs = JSON.parse(data)

    if (Object.keys(whereParams).length) {
      jobs = jobs.filter((job) => {
        if (whereParams.id && job.id !== whereParams.id) return false
        if (whereParams.name && job.name !== whereParams.name) return false
        if (whereParams.status && job.status !== whereParams.status)
          return false
        return true
      })
    }

    return jobs
  } catch (err) {
    console.error("Error fetching jobs:", err)
    return []
  }
}

export function saveJobs(jobs) {
  fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2))
}

export function createJob(data: Omit<jobType, "id">): string {
  const jobs = getJobs()
  const jobId = uuidv4()
  const newJob = { id: jobId, ...data }

  jobs.push(newJob)
  saveJobs(jobs)

  return jobId
}
