import { TError } from "@/interfaces/TSuperHero";
import React from "react";

const Error = ({ message }: TError) => {
  return (
    <div
      id="toast-danger"
      className="flex items-center w-full p-4 mb-4 text-gray-500 bg-slate-800 rounded-lg border shadow dark:text-slate-400"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-marron-txt bg-red-100 rounded-lg dark:bg-marron-txt dark:text-marron-txt">
        <svg
          className=""
          style={{
            width:'20px',
            height:'20px',
            margin:"4px"
          }}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      </div>
      <div className="ml-3 text-lg text-marron-txt font-serif">{message}</div>
    </div>
  );
};

export default Error;
