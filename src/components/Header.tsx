
import Link from "next/link";
import React from "react";

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="flex flex-wrap p-5 flex-col items-center justify-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 ">
          <span className="ml-3 text-3xl text-marron-txt">SuperHeroes Arcade</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
