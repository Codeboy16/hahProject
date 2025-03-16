import React, { useState } from 'react';
import '../../index.css'; 
import Footer from '../../components/footer';
import AuthHeader from '../../components/AuthHeader';
import { Link } from 'react-router-dom';

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
    <div className="dashboard-container">
      {/* <header className=" flex justify-around bg-gray-800 text-white py-3">
        <h1 className="header-title my-auto">Employer Dashboard</h1>
        <button className="logout">Logout</button>
      </header> */}
       <AuthHeader data="Employee"/>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><a href="#jobs" className="active">Job Posts</a></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><a href="#settings">Settings</a></li>
              <li><button onClick={postAJob} className="btn">Post New Job</button></li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <div className="empDetails">
            <h2>Welcome, Saniyaa Tripathi</h2>
            <p>Company: Google</p>
            <p>Email: saniyaa123@gmail.com</p>
          </div>

          <div className="postBtn">
            <button onClick={postAJob} className="btn">Post New Job</button>
          </div>

          <div className="newJob">
            <h3>Post a New Job</h3>
            <label>Job Title</label>
            <input placeholder='Enter the job title' type="text" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
            
            <label>Company Name</label>
            <input placeholder="Enter the company name" type="text" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
            
            <label>Description</label>
            <textarea placeholder='Enter the job description' value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
            
            <label>Location</label>
            <input placeholder='Enter the location' type="text" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
            
            <div className="jobPostBtns">
              <button className="btn" onClick={addTheJob}>Post</button>
              <button className="cancelBtn" onClick={cancel}>Cancel</button>
            </div>
          </div>

          <div className="previousJobs">
            <h3>Previous Job Posts</h3>
            {jobs.map((job) => (
              <div className="oldJob" key={job.id}>
                <h4>{job.title}</h4>
                <p><b>Company:</b> {job.company}</p>
                <p><b>Location:</b> {job.location}</p>
                <p><b>Description:</b> {job.description}</p>
                <p><b>Date Posted:</b> {job.dateOfPosted}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerDashboard;