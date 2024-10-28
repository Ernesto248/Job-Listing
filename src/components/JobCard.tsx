import { Job } from "../types";

interface Props {
  jobProp: Job;
}

const JobCard = ({ jobProp }: Props) => {
  const {
    company,
    logo,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    role,
    level,
  } = jobProp;

  return (
    <div className="flex flex-row justify-between bg-white border hover:border-l-4 hover:border-l-cyan-600 rounded-lg m-5 p-2 shadow-xl min-w-full">
      <div className="flex flex-row justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-start ml-3">
          <div className="flex flex-row items-center ">
            <h6 className="text-cyan-600">{company}</h6>
            {jobProp.new ? (
              <p className="ml-3 bg-cyan-700 font-bold text-white rounded-lg p-0.5">
                NEW!
              </p>
            ) : null}
            {featured ? (
              <p className="ml-3 bg-gray-900 font-bold text-white rounded-lg p-0.5">
                FEATURED
              </p>
            ) : null}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{position}</h3>
          </div>
          <div className="flex flex-row items-center ">
            <p className="text-gray-500">{postedAt}</p>
            <p className="ml-3 text-gray-500">{contract}</p>
            <p className="ml-3 text-gray-500">{location}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row items-center justify-center">
        <p className="mx-5 text-cyan-600 bg-gray-200 p-1 rounded-lg">{level}</p>
        <p className="mx-5 text-cyan-600 bg-gray-200 p-1 rounded-lg">{role}</p>
        {languages.map((lan) => (
          <p className="mx-5 text-cyan-600 bg-gray-200 p-1 rounded-lg">{lan}</p>
        ))}
        {tools.map((tool)=>(
            <p className="mx-5 text-cyan-600 bg-gray-200 p-1 rounded-lg">{tool}</p>
        ))}
        </div>
      </div>
    </div>
  );
};
export default JobCard;
