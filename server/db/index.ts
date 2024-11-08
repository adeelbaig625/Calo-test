import fs from "fs"
import { v4 as uuidv4 } from "uuid"
import { JOBS_FILE } from "../constants"
import {jobType, JobWhereParams} from "./type"

export function getJobs(whereParams:JobWhereParams={}) {
  try {
    const data = fs.readFileSync(JOBS_FILE, "utf-8")
    const jobs=JSON.parse(data)
   
    if(Object.values(whereParams).length)
    {
      const filteredJobs = jobs.filter((job) => {
        if (whereParams.id && job.id !== whereParams.id) return false;
        if (whereParams.name && job.name !== whereParams.name) return false;
        if (whereParams.status && job.status !== whereParams.status) return false;
        return true;
      }); 
    }
    
    return jobs
  } catch (err) {
    return {} // Return empty object if file doesn't exist
  }
}

export function saveJobs(jobs) {
  fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2))
}

export function createJob(data:Omit<jobType,'id'>):string {
  let jobs = getJobs()
  const jobId = uuidv4()
  jobs[jobId] = {id:jobId,...data}
  saveJobs(jobs)
  return jobId
}
