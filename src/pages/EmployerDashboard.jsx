import React, { useState } from 'react';
import '../index.css';
import Footer from '../components/footer';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "Google", location: "Mountain View, CA", description: "Develop scalable web applications.", dateOfPosted: "2025-03-01" },
    { id: 2, title: "Frontend Developer", company: "Facebook", location: "Menlo Park, CA", description: "Work on UI/UX for social media features.", dateOfPosted: "2025-02-28" },
    { id: 3, title: "Backend Developer", company: "Amazon", location: "Seattle, WA", description: "Build microservices for cloud platforms.", dateOfPosted: "2025-02-27" },
    { id: 4, title: "Data Scientist", company: "Netflix", location: "Los Gatos, CA", description: "Analyze user data to improve recommendations.", dateOfPosted: "2025-02-26" },
    { id: 5, title: "DevOps Engineer", company: "Microsoft", location: "Redmond, WA", description: "Automate CI/CD pipelines for cloud infrastructure.", dateOfPosted: "2025-02-25" },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    description: "",
    location: ""
  });

  const postAJob = () => {
    document.querySelector(".newJob").style.display = "block";
    document.querySelector(".postBtn").style.display = "none";
  };

  const cancel = () => {
    document.querySelector(".newJob").style.display = "none";
    document.querySelector(".postBtn").style.display = "block";
  };

  const addTheJob = () => {
    if (newJob.title && newJob.company && newJob.description && newJob.location) {
      const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
      setJobs([...jobs, { ...newJob, id: jobs.length + 1, dateOfPosted: currentDate }]);
      setNewJob({ title: "", company: "", description: "", location: "" }); // Reset input fields
      document.querySelector(".newJob").style.display = "none";
      document.querySelector(".postBtn").style.display = "flex";
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="body">
      <div className="empDetails">
        <div>Mohammad Soheb</div>
        <div>Google</div>
        <div>sohebmohammadd@gmail.com</div>
        <button className="logout">Logout</button>
      </div>

      <div className="postBtn">
        <button onClick={postAJob}>Post New Job</button>
      </div>

      <div className="np">
        <div className="newJob">
          <label>Job Title</label>
          <input placeholder='Enter the job title' type="text" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
          <br /><br />

          <label>Company Name</label>
          <input placeholder="Enter the company name"type="text" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
          <br /><br />

          <label>Description</label>
          <textarea placeholder='Enter the job description' type="text" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
          <br /><br />

          <label>Location</label>
          <input placeholder='Enter the location' type="text" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
          <br /><br />
          <label>Date</label>
          <input placeholder="Enter the Date"type="date" value={newJob.dateOfPosted} onChange={(e) => setNewJob({ ...newJob, dateOfPosted: e.target.value })} />
          <br /><br />

          <div className="jobPostBtns">
            <button className="postBtn1" onClick={addTheJob}>Post</button>
            <button className="cancelBtn" onClick={cancel}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="pp">
        <h3>Previous Job Posts</h3>
      </div>

      <div className="oldJobs">
        {jobs.map((job) => (
          <div className="oldJob" key={job.id}>
            <div><b>Title: </b>{job.title}</div>
            <div><b>Company: </b>{job.company}</div>
            <div><b>Location: </b>{job.location}</div>
            <div><b>Description: </b>{job.description}</div>
            <div><b>Date Posted: </b>{job.dateOfPosted}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default EmployerDashboard;
