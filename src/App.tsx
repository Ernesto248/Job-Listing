import { useEffect, useState } from "react";
import { Job } from "./types";
import JobCard from "./components/JobCard";
import FilterModal from "./components/FilterModal";

function App() {
  const [isModalVisble, setIsModalVisible] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<Array<string>>([]);
  const [filterJobs, setFilterJobs] = useState<Array<Job>>([])
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
    if (!filterItems.includes(value)) {
      setFilterItems([...filterItems, value]);
      setIsModalVisible(true);
    }
  };

  const handleClear = () => {
    setFilterItems([]);
    setIsModalVisible(false);
  };

  const deleteItem = (itemToDelete: string) => {
    const newItems = filterItems.filter((item) => item !== itemToDelete);
    setFilterItems(newItems);
  };

  useEffect(() => {
    if (filterItems.length === 0) {
      setIsModalVisible(false);
    }
  }, [filterItems]);

  const filteringJobs = ()=>{
    const filteredJobs = jobs.filter((job)=>{
      return filterItems.every((filter)=>{
        return (
          job.level === filter ||
          job.role ===filter ||
          job.languages.includes(filter)||
          job.tools.includes(filter)
        )
      })
    })
    setFilterJobs(filteredJobs)
  }
  

  useEffect(() => {
    filteringJobs();
  }, [filterItems, jobs]);

  return (
    <>
      <div className="flex flex-col items-center min-w-full bg-cyan-50">
        <div className="bg-cyan-700 w-full">
          <img src="/images/bg-header-desktop.svg" alt="" />
        </div>
        {isModalVisble && (
          <FilterModal
            onDeleteItem={deleteItem}
            onClear={handleClear}
            items={filterItems}
          />
        )}
        <div className="flex flex-col items-center justify-center w-3/4">
          {(filterItems.length > 0 ? filterJobs : jobs).map((job) => (
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
