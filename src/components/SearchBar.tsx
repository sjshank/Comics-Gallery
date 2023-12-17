import { Button } from "@/ui/Button";
import React from "react";

const SearchBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative mb-4 sm:w-96 w-72 inline-flex justify-center items-end gap-3">
      <div className="">
        <label htmlFor="name" className="leading-7 text-xl text-marron-txt">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        />
      </div>
      <div className="">
        <Button
          className="text-white bg-marron-txt border-0 py-2 px-6 focus:outline-none rounded text-lg "
          type="submit"
          title="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
