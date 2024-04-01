// src/components/JobCard.js
import React from 'react';

function JobCard({ job }) {
  return (
    <div>
      <h4>Job Card</h4>
      <p>{`Task: ${job.task}, Machine: ${job.machine}, Duration: ${job.duration}`}</p>
    </div>
  );
}

export default JobCard;


