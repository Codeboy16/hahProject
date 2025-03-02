import React from "react";

const JobCard = ({ title, company, location, description }) => {
  return (
    <div className="oldJob">
      <div><b>Title: </b>{title}</div>
      <div><b>Company: </b>{company}</div>
      <div><b>Location: </b>{location}</div>
      <div><b>Description: </b>{description}</div>
    </div>
  );
};

export default JobCard;
