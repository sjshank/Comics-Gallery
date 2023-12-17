import React, {
  JSXElementConstructor,
  ReactComponentElement,
  useState,
} from "react";
import SubHeader from "../ui/SubHeader";
import SuperheroCard from "@/components/SuperheroCard";

type ComicCatalogueProps = {
  OriginalComponent: React.FunctionComponent;
  subCatalogueHeader: string;
};

const ComicCatalogueHOC: React.FunctionComponent<any> = ({
  OriginalComponent,
  subCatalogueHeader,
}: ComicCatalogueProps): any => {
  const UpdatedComponent = (): any => {
    //render OriginalComponent and pass on its props.
    return (
      <>
        <div className="self-start lg:w-1/2 ">
          <SubHeader
            classname="text-marron-txt text-2xl text-center leading-10"
            headerLbl={subCatalogueHeader}
          />
          {/* <SuperheroCard />
          <SuperheroCard /> */}
        </div>
        <OriginalComponent />
      </>
    );
  };
  return UpdatedComponent;
};
export default ComicCatalogueHOC;
