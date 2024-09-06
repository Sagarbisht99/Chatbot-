import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataContexts";

const Data = () => {
  const { items, setitems, setDescriptions, descriptions } = useData();
  const [wordCount, setWordCount] = useState(0);
  const [activeButton, setActiveButton] = useState("Text");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const { clickingAddData } = useData();

  const submitHandlerDesc = (e) => {
    e.preventDefault();
    setitems([...items, descriptions]);
    setDescriptions("");
    setWordCount(0);
    navigate("/");
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    setDescriptions(text);
    setWordCount(text.length);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "Text":
        return (
          <form className="flex flex-col gap-6" onSubmit={submitHandlerDesc}>
            <input
              disabled
              className="p-3 text-lg md:text-xl border border-[#003366] rounded-lg"
              type="text"
              placeholder="Title"
            />
            <div className="relative">
              <textarea
                value={descriptions}
                onChange={handleDescriptionChange}
                className="p-3 text-lg md:text-xl bg-[#F1F1F1] border border-[#003366] rounded-lg w-full h-[150px] resize-none"
                placeholder="Description"
              />
              <div className="absolute bottom-3 right-3 text-sm text-gray-600">
                {wordCount} / 2000 words
              </div>
            </div>
            <input
              disabled
              className="p-3 text-lg md:text-xl border border-[#003366] rounded-lg"
              type="text"
              placeholder="Read More"
            />
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="py-3 px-5 bg-[#003366] text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-[#002244]"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setDescriptions("");
                  navigate("/");
                }}
                className="py-3 px-5 bg-red-500 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        );
      case "LINK":
        return (
          <form className="flex flex-col gap-6">
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              className="p-3 text-lg md:text-xl border border-[#003366] rounded-lg"
              placeholder="Enter URL"
            />
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => console.log("URL submitted:", url)}
                className="py-3 px-5 bg-[#003366] text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-[#002244]"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setUrl("");
                  setActiveButton("Text");
                }}
                className="py-3 px-5 bg-red-500 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        );
      case "PDF":
      case "EPUB":
      case "CSV":
        return (
          <form className="flex flex-col gap-6">
            <input
              type={activeButton === "CSV" ? "file" : "text"}
              onChange={handleFileChange}
              className="p-5 text-lg md:text-xl font-medium text-center bg-[#003366] text-white rounded-lg"
            />
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => console.log(`${activeButton} file uploaded`, file)}
                className="py-3 px-5 bg-[#003366] text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-[#002244]"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setActiveButton("Text");
                }}
                className="py-3 px-5 bg-red-500 text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4">
      <div className="relative rounded-lg border border-[#003366] p-6 bg-[#F1F1F1] flex flex-col gap-8 max-w-full w-full md:max-w-4xl">
        <div className="text-2xl md:text-3xl font-semibold text-[#003366] flex items-center justify-between border-b-2 border-[#003366] pb-4">
          <span>Add Data</span>
          <MdCancel onClick={clickingAddData} className="cursor-pointer text-2xl md:text-3xl" />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {["Text", "PDF", "EPUB", "LINK", "CSV"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveButton(type)}
              className={`py-2 px-4 text-lg md:text-xl font-semibold rounded-lg ${
                activeButton === type
                  ? "bg-[#003366] text-[#F1F1F1]"
                  : "bg-[#F1F1F1] text-[#003366] border border-[#003366]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default Data;
