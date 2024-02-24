import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video text-white bg-gradient-to-r from-black pt-36 px-12 absolute">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black  rounded-lg p-4 px-12 text-lg hover:bg-opacity-80">▶️ Play</button>
        <button className="bg-gray-500 text-white bg-opacity-50 rounded-lg p-4 px-12 mx-2 hover:bg-opacity-80 text-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
