import React from "react";
import Navbar from "./Navbar";

function DashBoard() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-row">
          <div className="text-blue-500">1</div>
          <div className="">2</div>
        </div>
        <div className="flex flex-row">
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
        </div>
        <div>alert</div>
        <div className="flex flex-row">
          <div>6</div>
          <div>7</div>
       </div>
       <Navbar />
      </div>
    </div>
  );
}

export default DashBoard;
