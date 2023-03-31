import React, { useState } from "react";
import { useRouter } from "next/router";
import { client } from "../client";
function Form() {
  const router = useRouter();
  const [imgurl, setImage] = useState(null);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const plantData = {
      _type: "plants",
      name: e.target.name.value,
      age: Number(e.target.age.value),
      imgurl: imgurl,
    };
    client.create(plantData).then((res) => {
      router.push("/");
    })
  };
  return (
    <form className="px-2" onSubmit={onSubmit}>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Plant Name
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="age"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Age in days
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="image"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImage}
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => router.push("/")}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
