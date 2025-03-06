// Resume.js
import React, { useState } from 'react';

const Resume = () => {
  // State to manage edit mode and resume information
  const [isEditing, setIsEditing] = useState(false);
  const [resumeInfo, setResumeInfo] = useState({
    name: 'John Doe',
    skills: 'JavaScript, React, Node.js',
    projects: 'Portfolio Website, E-commerce App',
    internships: 'Software Intern at XYZ Corp',
    qualifications: 'B.Sc. in Computer Science',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo({ ...resumeInfo, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">My Name:</label>
          <input
            type="text"
            name="name"
            value={resumeInfo.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Skills:</label>
          <input
            type="text"
            name="skills"
            value={resumeInfo.skills}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Projects:</label>
          <input
            type="text"
            name="projects"
            value={resumeInfo.projects}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Internships:</label>
          <input
            type="text"
            name="internships"
            value={resumeInfo.internships}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Qualifications:</label>
          <input
            type="text"
            name="qualifications"
            value={resumeInfo.qualifications}
            onChange={handleChange}
            disabled={!isEditing}
            className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
          />
        </div>

        <div className="flex justify-between">
          {isEditing ? (
            <button
              onClick={toggleEdit}
              className="bg-green-500 text-white py-2 px-10 rounded hover:bg-green-600 transition duration-200"
            >
              Save
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="bg-blue-500 text-white py-2 px-10 rounded hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;