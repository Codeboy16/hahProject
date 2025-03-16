// Profile.js
import React, { useState } from 'react';
import userProfile from '../../public/images/userProfile.png';

const Profile = () => {
  // State to manage edit mode and user information
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    location: 'New York, NY',
    company: 'Example Corp',
    address: '123 Main St, New York, NY',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2 mx-auto">
      <h2 className="text-lg font-bold mb-2 text-center">My Profile</h2>
      <img src={userProfile} alt="User  Profile" className="w-20 h-20 rounded-full mx-auto mb-2" />
      <div className="mb-2">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700">Location:</label>
        <input
          type="text"
          name="location"
          value={userInfo.location}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700">Company:</label>
        <input
          type="text"
          name="company"
          value={userInfo.company}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border rounded w-full p-2 ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>

      <div className="flex justify-between">
        {isEditing ? (
          <button
            onClick={toggleEdit}
            className="bg-green-500 text-white py-2 px-20 font-medium text-xl rounded hover:bg-green-600 transition duration-200"
          >
            Save
          </button>
        ) : (
          <button
            onClick={toggleEdit}
            className="bg-blue-500 text-white py-2 px-20 font-medium text-xl rounded hover:bg-blue-600 transition duration-200"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;