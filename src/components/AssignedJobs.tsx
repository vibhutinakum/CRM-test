import "../css/AssignedJobs.css";
import { AssignedJob } from "../types/candidate";

interface AssignedJobsProps {
  jobs: AssignedJob[];
  candidateName: string;
}

const AssignedJobs = ({ jobs, candidateName }: AssignedJobsProps) => {
  return (
    <div className="assigned-jobs">
      <div className="assigned-jobs__header">
        <h3>Assigned Job to {candidateName}</h3>
        <div className="assigned-jobs__actions">
          <button className="btn btn--primary">Assign To Job</button>
          <button className="btn btn--secondary">View All Assigned Jobs</button>
        </div>
      </div>

      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <div className="job-item__content">
              <div className="job-item__avatar">
                <span className="job-avatar">M</span>
              </div>
              <div>
                <h4 className="job-title">{job.title}</h4>
                <p className="job-company">{job.company}</p>
              </div>
            </div>
            <div className="job-meta">
              <div className="job-assignee">
                <i className="bx bx-user-circle"></i>
                {job.assignee}
              </div>
              <span className="job-date">
                <i className="bx  bx-stopwatch"></i>
                {job.assignedDate}
              </span>
            </div>
            <div className="job-item__actions">
              <span className="job-status">{job.status}</span>
              <button className="btn btn--secondary">View Files</button>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedJobs;
