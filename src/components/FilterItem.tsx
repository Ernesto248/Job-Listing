interface Props {
  item: string;
  onDelete: (itemToDelete: string) => void;
}

const FilterItem = ({ item, onDelete }: Props) => {

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        onDelete(item)
    }

  return (
    <div className=" mx-1 sm:mx-5 flex flex-row items-center justify-between bg-cyan-100 rounded-lg w-28">
      <div className="text-cyan-700 ">{item}</div>
      <button onClick={handleDelete}>
        <img
          className="bg-cyan-700 h-full p-1 rounded-r-sm cursor-pointer hover:bg-cyan-800"
          src="/images/icon-remove.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default FilterItem;
