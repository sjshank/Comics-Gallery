
import Link from "next/link";
import React from "react";

const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <footer className="body-font bg-gray-100">
      <div className="px-5 py-8 flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <span className="ml-3 text-2xl text-marron-txt">
            SuperHeroes Arcade
          </span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Discover all the super heroes & villians from comics world —
          <Link
            href="https://sjshank.me"
            className="text-gray-800 ml-1"
            target="_blank"
          >
            @sjshank
          </Link>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
