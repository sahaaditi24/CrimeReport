import React, { useState } from "react";
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
  imageUrl, // Assume imageUrl is passed as a prop
}) => {
  const [showImage, setShowImage] = useState(false);

  const toggleImageVisibility = () => {
    setShowImage(!showImage);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "active":
        return "bg-green-500 hover:bg-green-600";
      case "closed":
        return "bg-red-500 hover:bg-red-600";
      case "false":
        return "bg-red-500 hover:bg-red-600 line-through border-2 border-red-500";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className={`relative flex flex-col items-center mt-10 p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black ${status === 'false' ? 'line-through border-2 border-red-500' : ''}`}>
      {showImage && (
        <div className="absolute top-0 left-0 mt-2 ml-2">
          <img src={imageUrl} alt="Crime" className="w-20 h-20 rounded-lg shadow-lg" />
        </div>
      )}
      <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
      <div className="flex items-center mb-4">
        <IoMdContact className="text-white size-7" />
        <h1 className="text-white text-lg ml-2">{name}</h1>
        <div className="flex p-2 bg-[#444343] text-white rounded-full shadow-lg ml-4">
          <p className="text-base text-green-500 font-bold flex items-center">
            <img src="src/pages/Triflag.png" alt="Flags" className="pr-2" />
            {flags} flags
          </p>
        </div>
      </div>
      <p className="text-white text-xl text-left px-6 mb-6">{description}</p>
      <div className="flex gap-4 pr-10">
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
  );
};

export default Card;
