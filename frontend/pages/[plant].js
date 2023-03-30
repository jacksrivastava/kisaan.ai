import React from "react";
import Navbar from "../components/Navbar";

function Plant() {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="p-1 border-2 border-blue-200 rounded-lg">
            Name
          </div>
          <div className="p-1 border-2 border-blue-200 rounded-lg">
            Age
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <div className="p-1 border-2 border-blue-200 rounded-lg">
            <div className="text-gray-600 italic font-bold">Temperature</div>
            <div className="text-6xl mt-2 ml-4 font-light">
              <span className="font-semibold">36</span>°
            </div>
          </div>
          <div className="p-1 border-2 border-blue-200 rounded-lg">
            <div className="text-gray-600 italic font-bold">Humidity</div>
            <div className="text-3xl mt-2 ml-3 font-thin">
              <span className="text-6xl font-semibold">41</span>%
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
          className="object-cover h-80"
        />
      </div>
      <Navbar />
    </div>
  );
}

export default Plant;
