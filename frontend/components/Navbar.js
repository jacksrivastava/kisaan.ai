import React from "react";
import {
  ArrowTrendingUpIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
function Navbar() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex justify-around border border-black-500 p-4">
        <HomeIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        <ArrowTrendingUpIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        <a href="https://farmos.github.io/farmOS-map/">
          <MapPinIcon className="cursor-pointer h-6 w-6 text-blue-500 hover:text-blue-700" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
