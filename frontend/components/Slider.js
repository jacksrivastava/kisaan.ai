import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/solid";
import { client, urlFor } from "../client";

function Slider() {
  const router = useRouter();
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    const query = '*[_type=="plants"]';
    client.fetch(query).then((data) => {
      setPlants(data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-between mx-2">
        <h6 className="text-2xl italic font-medium">Crops</h6>
        <PlusIcon
          onClick={() => router.push("/newPlant")}
          className="h-8 w-8 text-blue-500"
        />
      </div>
      <div className="flex space-x-2 mx-2 mt-2 overflow-x-scroll">
        {plants?.map((plant, index) => (
          <img
            onClick={() => router.push(`/${plant.name}`)}
            src={urlFor(plant.imgurl)}
            className="object-cover h-48 w-80 rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
