// AppliedJobs.js
import React from 'react';


const AppliedJob = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Applied Jobs</h1>
      <div className="bg-white p-5 rounded shadow">
        <p className="text-gray-700">List of jobs you have applied for will be displayed here.</p>
        <div className='flex justify-around'>
     {/* Section 1 */}
        <div class="card w-48" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  {/* Section 2 */}
  <div class="card w-48" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

</div>
   {/* Section 3 */}
   <div class="card w-48" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

</div>
   {/* Section 4 */}
   <div class="card w-48" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

</div>

</div>
      </div>
    </div>
  );
};

export default AppliedJob;