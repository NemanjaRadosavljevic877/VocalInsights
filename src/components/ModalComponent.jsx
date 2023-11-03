"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Modal = ({ openModal, setOpenModal }) => {
  const wrapperRef = useRef();
  const buttonRef = useRef();

  const closeAnimation = () => {
    const wrapper = wrapperRef.current;

    gsap
      .timeline()
      .to(wrapper, {
        scale: 1.2,
      })
      .to(wrapper, {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setOpenModal(false);
        },
      });
  };

  const closeModal = () => {
    closeAnimation();
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeAnimation();
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (openModal) {
      gsap.from(wrapper, {
        keyframes: {
          "0%": { opacity: 0, scale: 0 },
          "75%": { opacity: 1, scale: 1.2 },
          "100%": { scale: 1 },
        },
        duration: 1,
      });
    }
  }, [openModal]);

  return (
    <>
      {openModal && (
        <aside
          className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-25 backdrop-brightness-50"
          id="wrapper"
          ref={wrapperRef}
          onClick={(e) => handleClose(e)}
        >
          <div className="relative">
            <div className="w-[400px] h-[550px] md:w-[620px] flex flex-col border border-white rounded relative bg-white">
              <div className="w-[90%] mx-auto my-5">
                <h2 className="text-xl font-semibold">Transcribe File</h2>

                <div className="mt-5 space-y-5">
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="transcriptionLang"
                      className="text-sm text-gray-700"
                    >
                      Transcription Language
                    </label>
                    <select
                      name="transcriptionLang"
                      id="transcriptionLang"
                      className="px-3 py-3 text-sm text-gray-500 border border-gray-400 rounded-md outline-gray-400"
                    >
                      <option value="">Default</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div className="h-[150px] border border-gray-400 border-dotted rounded-md">
                    <label
                      htmlFor="uploadFile"
                      className="h-[150px] w-full text-sm flex justify-center items-center flex-col text-gray-400"
                    >
                      <p>
                        <span className="font-bold text-blue-600">
                          Click to upload{" "}
                        </span>
                        or drag and drop
                      </p>

                      <div className="mt-2 space-y-1">
                        <p className="px-4 text-[0.6rem] text-center leading-none">
                          The maximum file size is 1GB for audio and 10GB for
                          videos.
                        </p>
                        <p className="px-4 text-[0.6rem] text-center leading-none">
                          Supported formats: mp3, mp4, wav, caf, aiff, avi,
                          rmvb, flv, m4a, mov, wmv, wma
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="uploadFile"
                      id="uploadFile"
                      hidden
                    />
                  </div>

                  <div className="flex flex-col space-y-2 text-sm">
                    <label htmlFor="importLink">Import from Link</label>
                    <input
                      type="text"
                      name="importLink"
                      id="importLink"
                      placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
                      className="py-3 pl-4 border border-gray-400 rounded-md placeholder:text-xs outline-gray-400"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="speakerIdentification"
                      id="speakerIdentification"
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor="speakerIdentification"
                      className="text-gray-900"
                    >
                      Speaker Identification
                    </label>
                  </div>

                  <button
                    className="w-full py-3 text-white border rounded-md disabled:bg-gray-200 disabled:border-gray-200 border-[#0048AD] bg-[#0048AD] text-sm md:text-base disabled:cursor-not-allowed"
                    disabled={false}
                  >
                    Transcribe File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Modal;
