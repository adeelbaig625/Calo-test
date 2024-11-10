import { getJobsEndpoint } from "../constants"
import { JobType } from "../pages/JobListing/type"

export const fetchJobs = async (): Promise<JobType[]> => {
  const response = await fetch(getJobsEndpoint)

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Something went wrong")
  }

  const data: JobType[] = await response.json()
  return data
}
