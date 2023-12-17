import React, { Suspense } from "react";
import ComicHeros from "./ComicHeros";
import ComicVillans from "./ComicVillans";
import CardPulse from "@/ui/CardPulse";

const Catalogue: React.FunctionComponent = (): React.ReactNode => {
  return (
    <div className="w-full flex md:inline-flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-between items-start mt-2 ml-4 gap-12">
      <Suspense
        fallback={
          <div className="lg:w-1/2">
            <CardPulse />
            <CardPulse />
            <CardPulse />
          </div>
        }
      >
        <ComicHeros />
      </Suspense>
      <Suspense
        fallback={
          <div className="lg:w-1/2">
            <CardPulse />
            <CardPulse />
            <CardPulse />
          </div>
        }
      >
        <ComicVillans />
      </Suspense>
    </div>
  );
};

export default Catalogue;
