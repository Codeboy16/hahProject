// AppliedJobs.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AppliedJob = () => {
  const [apiData,setApiData] = useState([]);
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2") 
    .then((res)=>{setApiData(res.data.data)})
    .catch(error=> console.log(error))
  },[])
  console.log("Api Is Called ",apiData)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center kanit-medium py-3">--Applied Jobs--</h2>
      <div className="bg-white px-5 rounded ">
        <p className="text-gray-700 text-xl font-medium">List of jobs you have applied for will be displayed here.</p>
        <div className="flex flex-wrap justify-between gap-4 p-4">
      {/* Section 1 */}
      {apiData.map((data) => (
        <div key={data.id} className="card w-56 flex-shrink-0">
          <img src={data.avatar} className="card-img-top" alt="Avatar" />
          <div className="card-body">
            <h5 className="card-title">
              {data.first_name + ' ' + data.last_name}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary px-12 mx-auto">
              Know More
            </a>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default AppliedJob;