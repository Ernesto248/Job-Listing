import { useEffect, useState } from "react";
import { Job } from "./types";
import JobCard from "./components/JobCard";
import FilterModal from "./components/FilterModal";

function App() {
  const [isModalVisble, setIsModalVisible] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<Array<string>>([]);
  const [jobs, setJobs] = useState<Array<Job>>([
    {
      id: 1,
      company: "Photosnap",
      logo: "./images/photosnap.svg",
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
  ]);

  const getJobs = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Response not ok");
      }
      const data: Array<Job> = await response.json();
      setJobs(data);
    } catch {
      console.error("There's been an issue with the data");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handlePressedButton = (value: string) => {
    setFilterItems([...filterItems, value]);
    setIsModalVisible(true);
  };

  const handleClear = () => {
    setFilterItems([]);
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="flex flex-col items-center min-w-full bg-cyan-50">
        <div className="bg-cyan-700 w-full">
          <img src="/images/bg-header-desktop.svg" alt="" />
        </div>
        {isModalVisble && (
          <FilterModal onClear={handleClear} items={filterItems} />
        )}
        <div className="flex flex-col items-center justify-center w-3/4">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              jobProp={job}
              onPressedButton={handlePressedButton}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
