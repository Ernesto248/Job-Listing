import { Job } from "../types";

interface Props {
  jobProp: Job;
  onPressedButton: (value: string) => void;
}

const JobCard = ({ jobProp, onPressedButton }: Props) => {
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

  const handlePressed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onPressedButton(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between bg-white border hover:border-l-4 hover:border-l-cyan-600 rounded-lg m-2 p-4 shadow-xl w-72  sm:min-w-full">
      <div className="flex flex-col justify-start sm:flex-row sm:justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-start ml-3">
          <div className="flex flex-row items-center h-6">
            <h6 className="text-cyan-600">{company}</h6>
            {jobProp.new ? (
              <p className="ml-3 h-full bg-cyan-700 font-bold text-white rounded-lg p-0.5 flex items-center justify-center">
                NEW!
              </p>
            ) : null}
            {featured ? (
              <p className="ml-3 bg-gray-800 font-bold text-white rounded-lg p-0.5 h-full flex items-center justify-center">
                FEATURED
              </p>
            ) : null}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 hover:text-cyan-700 cursor-pointer">{position}</h3>
          </div>
          <div className="flex flex-row items-center ">
            <p className="text-gray-500">{postedAt}</p>
            <p className="ml-3 text-gray-500">{contract}</p>
            <p className="ml-3 text-gray-500">{location}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center sm:justify-center gap-y-3">
          <div className="flex flex-row flex-wrap items-start sm:items-center justify-start sm:justify-center gap-x-3 gap-y-2">
            <button
              onClick={handlePressed}
              value={level}
              className="mx-2 text-cyan-600 bg-cyan-100 p-1 rounded-lg hover:bg-cyan-700 hover:text-white cursor-pointer"
            >
              {level}
            </button>
            <button
              onClick={handlePressed}
              value={role}
              className="mx-2 text-cyan-600 bg-cyan-100 p-1 rounded-lg hover:bg-cyan-700 hover:text-white cursor-pointer"
            >
              {role}
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-start sm:items-center justify-start sm:justify-center gap-x-3 gap-y-2 mt-2 sm:mt-0">
            {languages.map((lan, index) => (
              <button
                onClick={handlePressed}
                value={lan}
                key={index}
                className="mx-2 text-cyan-600 bg-cyan-100 p-1 rounded-lg hover:bg-cyan-700 hover:text-white cursor-pointer"
              >
                {lan}
              </button>
            ))}
            {tools.map((tool, index) => (
              <button
                onClick={handlePressed}
                value={tool}
                key={index}
                className="mx-2 text-cyan-600 bg-cyan-100 p-1 rounded-lg hover:bg-cyan-700 hover:text-white cursor-pointer"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
