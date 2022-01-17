import React from "react";

// "id": 1,
// "company": "Photosnap",
// "logo": "/images/photosnap.svg",
// "isNew": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["HTML", "CSS", "JavaScript"],
// "tools": []

const JobComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }

  if (languages) {
    tags.push(...languages);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg my-10 mx-10 p-6 rounded-lg ${
        featured && "border-l-8 border-teal-500 border-solid"
      } sm:flex-row`}
    >
      <div>
        <img
          className="w-20 h-20 -mt-12 mb-4 sm:h-24 sm:w-24 sm:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-2 ">
        <h3 className="text-xl text-teal-500">
          {company}
          {isNew && (
            <span className="bg-teal-500 px-2 py-1 m-2 rounded-full text-white text-sm font-bold uppercase">
              New!
            </span>
          )}
          {featured && (
            <span className="bg-gray-700 text-slate-100 rounded-full px-2 py-1 m-2 text-sm font-bold uppercase">
              Featured
            </span>
          )}
        </h3>
        <h2 className="text-2xl font-bold">{position}</h2>
        <p className="text-gray-700">
          {postedAt} &middot; {contract} &middot; {location}{" "}
        </p>
      </div>
      <div className="flex items-center mt-4 pt-4 border-t-2 border-gray-200 border-solid flex-wrap sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {tags
          ? tags.map((tag) => (
              <span
                className=" bg-teal-100 font-bold rounded-md mx-4 mt-4 px-2 py-1 text-teal-500 sm:mb-0 cursor-pointer"
                onClick={() => handleTagClick(tag)}
                key={tag.idx}
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobComponent;
