import React from "react";
import SubHeader from "@/ui/SubHeader";
import SuperheroCard from "./SuperheroCard";
import { getAllVillains } from "@/lib/actions";
import { TComicSuperheroes, TSuperHero } from "@/interfaces/TSuperHero";
import Error from "@/ui/Error";

const ComicVillans: React.FunctionComponent = async () => {
  const result : TComicSuperheroes = await getAllVillains();
  const hasError = result.error;

  return (
    <div className="self-start lg:w-1/2">
      <SubHeader
        classname="text-marron-txt text-2xl text-center leading-10"
        headerLbl="Comic Villians"
      />
      {hasError && <Error message={hasError.message}/>}
      {!hasError &&
        result.superheroes.map((hero: TSuperHero) => {
          return <SuperheroCard key={hero.id} superhero={hero} />;
        })}
    </div>
  );
};

export default ComicVillans;
