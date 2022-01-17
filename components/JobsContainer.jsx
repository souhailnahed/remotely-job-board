import React from "react";
import JobInfo from "./JobComponent";

const jobItems = [
  {
    id: 1,
    company: "Microsoft",
    title: "Senior Engineer",
    location: "Worldwide",
    salary: "$120,000",
  },
  {
    id: 2,
    company: "Meta",
    title: "React Engineer",
    location: "Worldwide",
    salary: "$100,000",
  },
];

const jobsList = jobItems.map((job) => (
  <JobInfo
    key={job.id}
    title={job.title}
    company={job.company}
    location={job.location}
    salary={job.salary}
  />
));

export default function JobsContainer() {
  return <div className="container">{jobsList}</div>;
}
