import { JobResultEnum } from "../../constants";
import './job-card.css'
type JobCardProps = {
    id:string;
    name:string;
    status:JobResultEnum,
    result?:string ;
}
const JobCard: React.FC<JobCardProps> = (props) => {
    return(<div className="job-card">
        <img  className="job-card-img" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
        <div className="job-details">
            <h1 className="job-title">Job one</h1>
            <h2 className="job-description">Job Status: <b>Completed</b></h2>
        </div>
    </div>)
    
}

export default JobCard