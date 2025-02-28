import React,{useState} from 'react'
import '../index.css'
import Footer from '../components/footer';
const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "Google", location: "Mountain View, CA", description: "Develop scalable web applications." },
    { id: 2, title: "Frontend Developer", company: "Facebook", location: "Menlo Park, CA", description: "Work on UI/UX for social media features." },
    { id: 3, title: "Backend Developer", company: "Amazon", location: "Seattle, WA", description: "Build microservices for cloud platforms." },
    { id: 4, title: "Data Scientist", company: "Netflix", location: "Los Gatos, CA", description: "Analyze user data to improve recommendations." },
    { id: 5, title: "DevOps Engineer", company: "Microsoft", location: "Redmond, WA", description: "Automate CI/CD pipelines for cloud infrastructure." },
    { id: 6, title: "Full Stack Developer", company: "Tesla", location: "Palo Alto, CA", description: "Develop applications for self-driving car software." },
    { id: 7, title: "Product Manager", company: "Apple", location: "Cupertino, CA", description: "Lead development of innovative tech products." },
    { id: 8, title: "Cybersecurity Analyst", company: "IBM", location: "New York, NY", description: "Monitor and enhance security systems." },
    { id: 9, title: "Machine Learning Engineer", company: "OpenAI", location: "San Francisco, CA", description: "Train AI models for natural language processing." },
    { id: 10, title: "Cloud Engineer", company: "Oracle", location: "Austin, TX", description: "Manage cloud infrastructure for enterprise solutions." }
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    description: ""
  });

  const postAJob = () => {
    document.querySelector(".newJob").style.display = "block";
    document.querySelector(".postBtn").style.display = "none";
  };
  const cancle=()=>{
    document.querySelector(".newJob").style.display = "none";
    document.querySelector(".postBtn").style.display = "block";
  }

  const addTheJob = () => {
    if (newJob.title && newJob.company && newJob.description) {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      setNewJob({ title: "", company: "", description: "" }); // Reset input fields
      document.querySelector(".newJob").style.display = "none";
      document.querySelector(".postBtn").style.display = "flex";
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    < div className="body">
    <div className="empDetails">
      <div>Mohammad Soheb</div>
      <div>Google</div>
      <div>sohebmohammadd@gmail.com</div>
    </div>

    <div className="postBtn">
      <button onClick={postAJob}>Post New Job</button>
    </div>
<div className="np">
<div className="newJob">
      <label>Job Title</label>
      <input type="text" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
      <br />
      <br />
      
      <label>Company Name</label>
      <input type="text" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
      <br />
      <br />
      
      <label>Description</label>
      <input type="text" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
      <br />
      <br />
      <label>Location</label>
      <input type="text" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
      <br />
      <br />
      <div className="jobPostBtns">
      <button  className="postBtn1"onClick={addTheJob}>Post</button>
      <button className="cancleBtn" onClick={cancle}>Cancle</button>
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
        </div>
      ))}
    </div>
    <Footer></Footer>
  </div>
  )
}

export default EmployerDashboard