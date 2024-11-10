import { JobStatusEnum } from "../../pages/JobListing/type"
import "./job-card.css"
type JobCardProps = {
  name?: string
  status: JobStatusEnum
  result?: string
}
const JobCard: React.FC<JobCardProps> = ({
  name = "",
  status,
  result = "https://daluscapital.com/wp-content/uploads/2016/04/dummy-post-square-1-1.jpg",
}) => {
  return (
    <div className="job-card">
      <img className="job-card-img" src={result} />
      <div className="job-details">
        <h1 className="job-title">{name}</h1>
        <h2 className="job-description">
          Job Status: <b>{status}</b>
        </h2>
      </div>
    </div>
  )
}

export default JobCard
