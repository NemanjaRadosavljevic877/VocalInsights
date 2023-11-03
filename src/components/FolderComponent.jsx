import React from "react";

const FolderComponent = ({ icon, number, title }) => {
  return (
    <>
      <div className="flex-1 px-6 py-2 space-y-3 bg-white border border-gray-300 rounded-md cursor-pointer">
        <div className="border border-[#F9FAFB] rounded-full bg-[#F9FAFB] p-1 max-w-max text-lg">
          {icon}
        </div>
        <p className="text-xl font-semibold text-gray-400">{number}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </>
  );
};

export default FolderComponent;
