import { IoIosArrowDown } from "react-icons/io";
const Filter: React.FC = (): JSX.Element => {
  return (
    <div className="border-[1.5px] flex  justify-between p-2 mt relative">
      <div className="flex   ">
        <div className="flex   cursor-pointer p-4">
          <p className="text-sm font-medium">SIZE</p>
          <IoIosArrowDown className="w-5 h-5 mx-2" />
        </div>

        <div className="flex   cursor-pointer p-4">
          <p className="text-sm font-medium">TYPE</p>
          <IoIosArrowDown className="w-5 h-5 mx-2" />
        </div>
        <div className="flex justify-center cursor-pointer p-4">
          <p className="text-sm font-medium">MATERIAL</p>
          <IoIosArrowDown className="w-5 h-5 mx-2" />
        </div>

        <div className="flex  justify-center cursor-pointer p-4">
          <p className="text-sm font-medium">COLOR</p>
          <IoIosArrowDown className="w-5 h-5 mx-2" />
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer p-4">
        <p className="text-sm font-medium">SORT BY </p>
        <IoIosArrowDown className="w-5 h-5 mx-2" />
      </div>
    </div>
  );
};

export default Filter;
