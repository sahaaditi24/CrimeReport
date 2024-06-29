import React from "react";
import { IoMdContact } from "react-icons/io";

const Card = ({
  id,
  title,
  name,
  flags,
  description,
  onShowMap,
  onFlag,
  status,
}) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "active":
        return "bg-green-500 hover:bg-green-600";
      case "closed":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  return (
    <div className="relative flex justify-center items-center mt-10">
      <img
        src="src/pages/Cardbg.png"
        alt="Background"
        className="w-[25.5rem] h-auto"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white pt-4 text-center">
            {title}
          </h1>
          <div className="flex justify-center mt-6 items-center">
            <IoMdContact className="text-white size-7" />
            <h1 className="text-white text-lg ml-2 mr-14">{name}</h1>
            <div className="flex p-4 bg-[#444343] text-white rounded-full shadow-lg">
              <p className="text-base text-green-500 font-bold flex items-center">
                <img src="src/pages/Triflag.png" alt="Flags" className="pr-2" />
                {flags} flags
              </p>
            </div>
          </div>
        </div>
        <div className="w-[27.5rem] h-auto mt-4 text-left px-8">
          <p className="text-white text-xl">{description}</p>
        </div>
        <div className="flex ml-8 mt-8 gap-4">
          <button
            className="bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600"
            onClick={onShowMap}
          >
            Show on Map
          </button>
          <button
            className="border border-green-500 text-green-500 text-sm px-6 py-2 rounded-md hover:bg-green-500 hover:text-white"
            onClick={() => onFlag(id)}
          >
            Flag
          </button>
          <div className={`text-white text-sm px-6 py-2 rounded-md ${getStatusClass(status)}`}>
          {status}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
