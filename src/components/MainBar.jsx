"use client";

import React, { useState } from "react";
import FolderComponent from "./FolderComponent";
import { BookmarkIcon, FileIcon } from "@/helper/svg";
import ResponsiveTable from "./ResponsibleTable";
import Modal from "./ModalComponent";

const FOLDER = [
  {
    id: 1,
    title: "Uploaded Files",
    number: "100",
    icon: <FileIcon extraClasses="stroke-gray-800" />,
  },
  {
    id: 2,
    title: "Transcribed",
    number: "50",
    icon: <p className="px-2 text-lg font-semibold text-gray-800">T</p>,
  },
  {
    id: 3,
    title: "Saved",
    number: "20",
    icon: <BookmarkIcon extraClasses="stroke-gray-800" />,
  },
];

const MainBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="w-[90%] mx-auto mt-3">
        <div className="flex justify-between">
          <div className="text-gray-800">
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              Welcome, Ayoola
            </h2>
            <p className="text-sm">
              Upload your audio and video to convert to text
            </p>
          </div>

          <button
            className="text-white border border-[#0048AD] bg-[#0048AD] py-2 rounded-md px-3 text-xs whitespace-nowrap"
            onClick={setOpenModal}
          >
            Transcribe File
          </button>
        </div>

        <div className="justify-center gap-5 mt-4 space-y-5 md:space-y-0 md:flex">
          {FOLDER.map((item) => (
            <FolderComponent
              key={item.id}
              title={item.title}
              number={item.number}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="mt-4 border border-gray-400 rounded-md xxs:h-[calc(100vh-250px)] xs:h-[calc(100vh-400px)] xl:md:h-[calc(100vh-320px)] overflow-y-auto">
          <div className="w-[95%] mx-auto">
            <h2 className="py-2 font-semibold text-gray-900 border-b-2">
              Recent Files
            </h2>
            <div className="mt-5">
              <ResponsiveTable />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="invisible">Hidden</p>
        </div>
      </section>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default MainBar;
