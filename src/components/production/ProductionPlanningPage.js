// src/components/ProductionPlanningPage.js
import React, { useState } from 'react';
import CalendarView from './CalendarView';
import JobCard from './JobCard';

function ProductionPlanningPage() {
  const [jobs, setJobs] = useState([
    { id: "J001", task: "Cutting", machine: "Cutter A", duration: 2 },
    { id: "J002", task: "Assembly", machine: "Assembler B", duration: 3 },
    { id: "J003", task: "Packaging", machine: "Packager C", duration: 1.5 },
  ]);

  // New state to hold form data for adding a job
  const [newJob, setNewJob] = useState({ task: "", machine: "", duration: 0 });

  // Function to handle form changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewJob(prevState => ({
      ...prevState,
      [name]: name === 'duration' ? Number(value) : value,
    }));
  };

  // Function to add a new job
  const addJob = (event) => {
    event.preventDefault();
    // Generate a simple unique ID
    const id = `J00${jobs.length + 1}`;
    setJobs(prevJobs => [...prevJobs, { ...newJob, id }]);
    // Reset form
    setNewJob({ task: "", machine: "", duration: 0 });
  };

  return (
    <div>
      <h2>Production Planning</h2>
      <CalendarView jobs={jobs} />
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}

      {/* Thinking to add more  job */}
      <form onSubmit={addJob}>
        <h3>Add a New Job</h3>
        <input
          type="text"
          name="task"
          value={newJob.task}
          onChange={handleChange}
          placeholder="Task"
          required
        />
        <input
          type="text"
          name="machine"
          value={newJob.machine}
          onChange={handleChange}
          placeholder="Machine"
          required
        />
        <input
          type="number"
          name="duration"
          value={newJob.duration}
          onChange={handleChange}
          placeholder="Duration (hours)"
          min="0"
          step="0.5"
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default ProductionPlanningPage;
