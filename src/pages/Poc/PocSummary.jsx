import React, { useEffect, useState } from 'react';
import PocJob from '../../components/pocJob';
import Alert from '@mui/material/Alert';
const Poc = () => {

  const [fromSelected, setFormSelected] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState('All');
  const users = [
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Mobile Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" },
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Mobile Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" },
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Frontend Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" }
  ];
  //Using UseEffect For Alert Message
useEffect(()=>{
   setTimeout(()=>{
      setFormSelected(null);
   },5000)
  }, [fromSelected]);
  const filteredUsers = selectedPosition === 'All' ? users : users.filter(user => user.position === selectedPosition);
  // Calculate summary data based on the selected position
  const totalApplications = filteredUsers.length;
  const acceptedApplications = filteredUsers.filter(user => user.accepted).length;
  const rejectedApplications = totalApplications - acceptedApplications;
  return (
    <div className="bg-gray-50 min-h-screen overflow-scroll">
      {/* Show Summary Data */}
      <div className="container mx-auto mt-6">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-2xl font-extrabold mb-4 text-center kanit-medium">--Applications Summary--</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl roboto"><strong>Total Applications:</strong> {totalApplications}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl roboto"><strong>Applications Accepted:</strong> {acceptedApplications}</p>
            </ div>
            <div className="bg-red-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl roboto"><strong>Applications Rejected:</strong> { rejectedApplications}</p>
            </div>
          </div>
        </div> 
      </div>
      {/* Position Filter Buttons */}
      <div className="container mx-auto mt-3 flex justify-center space-x-4 rounded font-medium">
        <button 
          onClick={() => setSelectedPosition('All')} 
          className={`py-3 px-4 rounded-lg ${selectedPosition === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedPosition('Frontend Developer')} 
          className={`py-2 px-4 rounded-lg ${selectedPosition === 'Frontend Developer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          Web Development
        </button>
        <button 
          onClick={() => setSelectedPosition('Backend Developer')} 
          className={`py-2 px-4 rounded-lg ${selectedPosition === 'Backend Developer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          Backend Development
        </button>
        <button 
          onClick={() => setSelectedPosition('Mobile Developer')} 
          className={`py-2 px-4 rounded-lg ${selectedPosition === 'Mobile Developer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200`}
        >
          Mobile Development
        </button>
      </div>
      {/* Show The Candidates Who Applied for the Job */}
      <div className="container flex flex-wrap justify-center mx-auto mt-6 mb-5">
        {filteredUsers.map((user, index) => (
          <PocJob key={index} user={user} setFormSelected={setFormSelected}/>
        ))}
      </div> 
      {fromSelected !== null && (
        <Alert 
          variant="filled" 
          severity={fromSelected === 1 ? "success" : "error"}
          className="fixed bottom-4 right-4 z-50 px-12 animate-bounce ease-in-out"
        >
          {fromSelected === 1 ? 'This Form Is Successfully Accepted.' : 'This Form Is Rejected Successfully.'}
        </Alert>
      )
      }
    </div>
  );
}

export default Poc;