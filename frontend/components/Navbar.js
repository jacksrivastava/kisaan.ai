import React from "react";
import { ArrowTrendingUpIcon,HomeIcon,MapPinIcon} from "@heroicons/react/24/solid";
function Navbar() {
  return (
      <div className="flex">
        <HomeIcon className="h-6 w-6 text-blue-500" />
        <ArrowTrendingUpIcon className="h-6 w-6 text-blue-500" />
        <MapPinIcon className="h-6 w-6 text-blue-500" />
      </div>
  );
}

export default Navbar;
