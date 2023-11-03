import {
  BookmarkIcon,
  FileIcon,
  HelpIcon,
  HomeIcon,
  RocketIcon,
  SettingIcon,
  ShareIcon,
  TrashIcon,
} from "@/helper/svg";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col mt-7 gap-y-44">
        <div className="w-[70%] mx-auto">
          <aside className="flex flex-col space-y-5 ">
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <HomeIcon />
              <p className="text-sm">Home</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <FileIcon />
              <p className="text-sm">All Files</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <BookmarkIcon />
              <p className="text-sm">Saved</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <ShareIcon />
              <p className="text-sm">Integrations</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <TrashIcon />
              <p className="text-sm">Trash</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <SettingIcon />
              <p className="text-sm">Settings</p>
            </div>

            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <HelpIcon />
              <p className="text-sm">Help and Support</p>
            </div>
          </aside>
        </div>

        <div className="text-sm bg-[#E0EDFF] border border-[#E0EDFF] w-[83%] mx-auto flex flex-col items-center py-3 rounded-md space-y-3">
          <RocketIcon extraClasses="stroke-blue-800" />
          <h3 className="text-lg">Upgrade Account</h3>
          <p className="text-xs text-gray-500">
            Access to Unlimited Transcription
          </p>

          <button className="text-white border border-[#0048AD] w-[78%] mx-auto bg-[#0048AD] py-3 rounded-md">
            Upgrade
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
