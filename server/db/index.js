import fs from "fs"
import { v4 as uuidv4 } from "uuid"
const JOBS_FILE = "jobs.json"

export function getJobs() {
  try {
    const data = fs.readFileSync(JOBS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (err) {
    return {} // Return empty object if file doesn't exist
  }
}

export function saveJobs(jobs) {
  fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2))
}

export function createJob() {
  let jobs = getJobs()
  const jobId = uuidv4()
  jobs[jobId] = { id: jobId, status: "pending", result: null }
  saveJobs(jobs)
  return jobId
}
