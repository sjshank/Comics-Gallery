import "server-only";

import { TSuperHero } from "@/interfaces/TSuperHero";
import React from "react";

const SuperheroCardBody = ({
  biography,
  appearance,
  connections,
  work,
}: Partial<TSuperHero>) => {
  return (
    <>
      <div className="lg:grid xs:line-grid lg:grid-cols-2 border-collapse border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-700 text-sm shadow-sm place-items-center">
        <div className=" border-slate-300 dark:border-slate-600 font-serif text-lg p-2 text-slate-900 dark:text-slate-200 text-center">
          Biograghy
        </div>
        <div className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 leading-normal text-base font-serif lg:place-self-start md:place-self-start">
          <ul>
            <li className="p-2">Full Name : {biography?.fullName}</li>
            <li className="p-2">Birth Place : {biography?.placeOfBirth}</li>
            <li className="p-2">
              First Appearance : {biography?.firstAppearance}
            </li>
            <li className="p-2">Publisher: {biography?.publisher}</li>
          </ul>
        </div>
      </div>
      <div className="lg:grid xs:line-grid lg:grid-cols-2 border-collapse  border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-700 text-sm shadow-sm place-items-center">
        <div className="  border-slate-300 dark:border-slate-600 text-lg font-serif p-2 text-slate-900 dark:text-slate-200 text-center">
          Appearance
        </div>
        <div className=" border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 leading-normal text-base font-serif lg:place-self-start md:place-self-start">
          <ul>
            <li className="p-2">Gender : {appearance?.gender}</li>
            <li className="p-2">Height : {appearance?.height[0]}</li>
            <li className="p-2">Weight : {appearance?.weight[0]}</li>
            <li className="p-2">Hair Color: {appearance?.hairColor}</li>
          </ul>
        </div>
      </div>
      <div className="lg:grid xs:line-grid lg:grid-cols-2 border-collapse  border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-700 text-sm shadow-sm place-items-center">
        <div className=" border-slate-300 dark:border-slate-600 text-lg font-serif p-2 text-slate-900 dark:text-slate-200 text-center">
          Work
        </div>
        <div className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 leading-normal text-base font-serif lg:place-self-start md:place-self-start">
          <ul>
            <li className="p-2">Base : {work?.base}</li>
            <li className="p-2">Occupation : {work?.occupation}</li>
          </ul>
        </div>
      </div>

      <div className="lg:grid xs:line-grid lg:grid-cols-2 border-collapse  border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-700 text-sm shadow-sm place-items-center">
        <div className="  border-slate-300 dark:border-slate-600 text-lg font-serif p-2 text-slate-900 dark:text-slate-200 text-center ">
          Connections
        </div>
        <div className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 leading-normal text-base font-serif lg:place-self-start md:place-self-start">
          <ul>
            <li className="p-2">Relatives : {connections?.relatives}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SuperheroCardBody;
