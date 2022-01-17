import Head from "next/head";
import JobsContainer from "../components/JobsContainer";
import { useState, useEffect } from "react";
import JobComponent from "../components/JobComponent";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(
    () =>
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        }),
    []
  );

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level];
    if (filters.length === 0) {
      return true;
    }

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) =>
    setFilters(filters.filter((f) => f !== passedFilter));

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <Head>
        <title>Remotely</title>
        <meta
          name="description"
          content="A leading job board for remote hires."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/*Header for brand */}
        <header className="m-10 py-5 font-bold text-center border-solid rounded-lg border-gray-500 border-4">
          <h2 className="text-5xl">Remotely</h2>
          <h3 className="text-2xl">The job board for remote hires.</h3>
        </header>
        {/* Rendering Filter Area */}
        {filters.length > 0 && (
          <div className={`flex bg-white shadow-md m-10  p-6 rounded`}>
            {filters.map((filter) => (
              <span
                onClick={() => handleFilterClick(filter)}
                className="text-teal-500 bg-teal-100 fount-bold mr-4 mb-4 p-2 rounded sm:mb-0 cursor-pointer "
              >
                {filter}
                <span className="mx-1 font-bold  text-gray-800"> ✕</span>
              </span>
            ))}
          </div>
        )}
        {/* Rendering Job Components */}
        {jobs.length === 0 ? (
          <p>Loading jobs...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}
