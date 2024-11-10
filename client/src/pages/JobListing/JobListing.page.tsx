import React, { useState, useEffect } from "react"
import JobCard from "../../components/JobCard/JobCard"
import { JobType } from "./type"
import JobModal from "../../components/JobModal/JobModal"
import "./job-listing.css"
import Header from "../../components/Header/Header"
import { fetchJobs } from "../../api/getJob"
import { createJob } from "../../api/createJob"

type FormData = {
  name: string
}

const JobListing: React.FC<any> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [jobs, setJobs] = useState<JobType[]>([])
  const [error, setError] = useState<string>("")

  const onJobSubmit = async (data: FormData) => {
    try {
      const newJobId = await createJob(data.name)
      console.log("newJobId", newJobId)
      await loadJobs()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
    setIsModalOpen(false)
  }
  const loadJobs = async () => {
    try {
      const data = await fetchJobs()
      setJobs(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  useEffect(() => {
    loadJobs()
  }, [])

  return (
    <div>
      <Header onCreateJobClick={() => setIsModalOpen(true)} />
      <div className="job-listing-hero">
        {jobs.map((job) => (
          <JobCard name={job.name} status={job.status} result={job?.result} />
        ))}

        <JobModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={onJobSubmit}
        />
      </div>
    </div>
  )
}

export default JobListing
