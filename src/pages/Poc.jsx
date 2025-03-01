import React, { useEffect, useState } from 'react';
import PocJob from '../components/pocJob';
import Footer from '../components/footer';
import { redirect } from 'react-router-dom';

const Poc = () => {
  useEffect(() => {   
    document.title = 'Point Of Contact';
  }, []);

  const [selectedPosition, setSelectedPosition] = useState('All');
  const users = [
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS", "Tailwind CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Mobile Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" },
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS", "Tailwind CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Mobile Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" },
    { id: "12345", name: "John Doe", email: "john.doe@example.com", position: "Frontend Developer", skills: ["JavaScript", "React", "CSS", "Tailwind CSS"], resume: "link-to-resume.pdf" },
    { id: "12346", name: "Jane Smith", email: "jane.smith@example.com", position: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], resume: "link-to-resume.pdf" },
    { id: "12347", name: "Alice Johnson", email: "alice.johnson@example.com", position: "Frontend Developer", skills: ["React Native", "Java", "Swift"], resume: "link-to-resume.pdf" }
  ];

  const handleAccept = (user) => {
    alert(`Accepted ${user.name}'s application.`);
  };

  const handleReject = (user) => {
    alert(`Rejected ${user.name}'s application.`);
  };

  const handleLogout = () => {
    alert('You have been logged out.');
    redirect('/login');
    // Add your logout logic here (e.g., redirect to login page)
  };

  const filteredUsers = selectedPosition === 'All' ? users : users.filter(user => user.position === selectedPosition);
  // Calculate summary data based on the selected position
  const totalApplications = filteredUsers.length;
  const acceptedApplications = filteredUsers.filter(user => user.accepted).length;
  const rejectedApplications = totalApplications - acceptedApplications;
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className='bg-blue-700 text-white py-4 shadow-md flex justify-around items-center px-6'>
        <h3 className='text-xl font-bold'>Point Of Contact</h3>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Logout
        </button>
      </header>



      {/* Show Summary Data */}
      <div className="container mx-auto mt-6">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl"><strong>Total Applications:</strong> {totalApplications}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl"><strong>Applications Accepted:</strong> {acceptedApplications}</p>
            </ div>
            <div className="bg-red-100 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-800 text-xl"><strong>Applications Rejected:</strong> { rejectedApplications}</p>
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
          <PocJob key={index} user={user} handleAccept={handleAccept} handleReject={handleReject} />
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-6">
        <hr className="my-6" />
        <Footer />
      </footer>
    </div>
  );
}

export default Poc;