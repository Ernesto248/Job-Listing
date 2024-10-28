import FilterItem from "./FilterItem";

interface Props {
  items: Array<string>;
  onClear: () => void;
}

const FilterModal = ({ items,onClear }: Props) => {
  return (
    <div className="flex justify-between mr-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 bg-white border-2  w-64 sm:w-4/5 rounded-lg m-3 p-3">
        {items.map((item, index) => (
          <FilterItem key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center w-10 sm:w-1/6">
        <button onClick={onClear} className="text-cyan-700 text-lg hover:underline">Clear</button>
      </div>
    </div>
  );
};

export default FilterModal;
