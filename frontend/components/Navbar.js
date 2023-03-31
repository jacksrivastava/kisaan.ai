import React from "react";
import {
  ArrowTrendingUpIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
function Navbar() {
  return (
    <div className="fixed bottom-0 w-full bg-white">
      <div className="flex justify-around border border-black-500 p-4">
        <a href="/">
          <HomeIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        </a>
        <a href="/e_mandi">
          <ArrowTrendingUpIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        </a>
        <a href="https://farmos.github.io/farmOS-map/">
          <MapPinIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
