import React, { useState } from 'react';
import JobCard from "../../components/JobCard/JobCard";
import { JobResultEnum } from "../../constants";
import JobModal from '../../components/JobModal/JobModal';  // Import the new modal component
import './job-listing.css';
import Header from '../../components/Header/Header';

type FormData = {
    name: string;
};

const JobListing: React.FC<any> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobs, setJobs] = useState([
        { id: "1", name: "Job 1", status: JobResultEnum.PENDING },
        { id: "2", name: "Job 2", status: JobResultEnum.PENDING },
        { id: "3", name: "Job 3", status: JobResultEnum.PENDING },
        { id: "4", name: "Job 4", status: JobResultEnum.PENDING }
    ]);

    const onJobSubmit = (data: FormData) => {
        setJobs([...jobs, { id: (jobs.length + 1).toString(), name: data.name, status: JobResultEnum.PENDING }]);
        setIsModalOpen(false);
    };

    return (
        <div >
            <Header onCreateJobClick={()=>setIsModalOpen(true)}/>
            <div className="job-listing-hero">

            {jobs.map((job) => (
                <JobCard key={job.id} id={job.id} name={job.name} status={job.status} />
            ))}

            {/* Job Modal Component */}
            <JobModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSubmit={onJobSubmit}
            />
            </div>
        </div>
    );
};

export default JobListing;