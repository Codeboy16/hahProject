import React from 'react'

const PocJob = ({user,handleAccept,handleReject}) => {

  return (
    <div className="mt-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg p-4">
    <h2 className="text-lg font-semibold mb-2">#{user.id}</h2>
    <div className="mb-2">
      <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700"><strong>Position Applied For:</strong> {user.position}</p>
      <p className="text-gray-700"><strong>Skills Matched:</strong> {user.skills.join(', ')}</p>
      <p className="text-gray-700"><strong>Resume:</strong> <a href={user.resume} className="text-blue-500 underline">View Resume</a></p>
    </div>

    <div className="flex justify-between mt-4">
      <button 
        className="bg-green-500 rounded text-white font-semibold py-2 px-12 shadow hover:bg-green-600 transition duration-200"
        onClick={handleAccept}
      >
        Accept
      </button>
      <button 
        className="bg-red-500 rounded text-white font-semibold py-2 px-12 shadow hover:bg-red-600 transition duration-200 "
        onClick={handleReject}
      >
        Reject
      </button>
    </div>
  </div>
  )
}

export default PocJob