import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Slider from "./Slider";

function DashBoard() {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-row w-full justify-between">
          <div className="font-bold italic text-2xl text-blue-500 m-4">
            मेरा खेत
          </div>
          <div className="flex justify-end">
            <Image src="/my-avatar.png" width={80} height={79} />
          </div>
        </div>
        <div className="flex flex-row justify-around mt-4 overflow-hidden">
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
          <div className="p-1 border-2 border-blue-200 rounded-lg">
            <div className="text-gray-600 italic font-bold">Sunlight</div>
            <div className="text-3xl mt-2 ml-1 font-thin">
              <span className="text-6xl font-semibold">101</span>%
            </div>
          </div>
        </div>
        <div className="mt-4 mb-8 p-2 border rounded-lg border-green-500 bg-green-200">
          {/* <div className="text-gray-100 italic px-2">Alert</div> */}
          <div className="flex justify-center text-xl">
            Everything is fine. No alerts.
          </div>
        </div>
        {/* <!-- carousel slider --> */}
        <Slider/>
      </div>
      <Navbar />
    </div>
  );
}

export default DashBoard;
