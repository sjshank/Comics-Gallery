"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TKnowMoreProps = {
  name: string;
};

const KnowMore = ({ name }: TKnowMoreProps) => {
  const pathname = usePathname();
  return (
    <div className="">
      {pathname === "/" && (
        <Link
          href={`/${name}`}
          className="mt-3 text-marron-txt inline-flex text-sm items-center font-mono "
        >
          Know More
          <svg
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default KnowMore;
