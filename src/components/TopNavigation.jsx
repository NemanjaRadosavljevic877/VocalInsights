import { BarIcon, NotificationIcon, SearchIcon } from "@/helper/svg";
import Image from "next/image";
import React from "react";

const TopNavigation = () => {
  return (
    <nav className="flex items-center h-14">
      <div className="w-[25%] hidden lg:block ">
        <h1 className="pl-16 text-2xl font-semibold text-blue-500">abc firm</h1>
      </div>

      <div className="w-full lg:w-[75%] px-5 sm:px-10 flex items-center justify-between gap-5 md:gap-14 lg:gap-40">
        <BarIcon extraClasses="lg:hidden" />

        <div className="relative flex-1">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
            className="w-full pl-8 text-sm text-gray-400 bg-[#F9FAFB] rounded-md h-9 placeholder:text-sm outline-white"
          />
          <SearchIcon extraClasses="absolute top-3 left-2 w-4 h-4 stroke-gray-400" />
        </div>

        <div className="flex items-center gap-2">
          <div className="border border-[#F9FAFB] rounded-full bg-[#F9FAFB] p-1">
            <NotificationIcon extraClasses="cursor-pointer" />
          </div>

          <div className="relative w-8 h-8 cursor-pointer">
            <Image
              src="/developer.jpg"
              alt="Developer - Ayoola Adewale"
              fill={true}
              className="absolute object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
