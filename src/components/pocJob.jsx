import React from 'react';
import UserProfile from '/images/userProfile.png'
const PocJob = ({ user, setFormSelected }) => {
  return (
    <div className="mt-6 max-w-sm md:max-w-xs\
     lg:max-w-lg bg-white rounded-lg shadow-xl p-6 mx-4 hover:scale-103 transform transition duration-500 ease-in-out">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 roboto">{`#${user.id}`}</h2>
        <img src={UserProfile} className='w-12 h-12 mx-2'/>
      </div>
      <div className="mb-6 space-y-2">
        <p className="text-gray-700 roboto"><strong className="font-medium ">Name:</strong> {user.name}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Email:</strong> {user.email}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Position Applied For:</strong> {user.position}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Skills Matched:</strong> {user.skills.join(', ')}</p>
        <p className="text-gray-700 roboto"><strong className="font-medium">Resume:</strong> 
          <a href={user.resume} className="text-blue-600 underline hover:text-blue-800 transition duration-200">View Resume</a>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button 
          className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg hover:bg-green-700 Round roboto"
          onClick={()=>{setFormSelected(1)}}

        >

          Accept
        </button>
        <button 
          className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg hover:bg-red-700 Round roboto"
          onClick={()=>{setFormSelected(0)}}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default PocJob;
