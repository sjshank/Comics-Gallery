import React from "react";
import SubHeader from "@/ui/SubHeader";
import SuperheroCard from "./SuperheroCard";
import { getAllHeros } from "@/lib/actions";
import { TSuperHero, TComicSuperheroes } from "@/interfaces/TSuperHero";
import Error from "@/ui/Error";

const ComicHeros: React.FunctionComponent = async () => {
  const result : TComicSuperheroes = await getAllHeros();
  const hasError = result.error;
  return (
    <div className="self-start lg:w-1/2 ">
      <SubHeader
        classname="text-marron-txt text-2xl text-center leading-10"
        headerLbl="Comic Heroes"
      />
      {hasError && <Error message={hasError.message} />}
      {!hasError &&
        result.superheroes.map((hero: TSuperHero) => {
          return <SuperheroCard key={hero.id} superhero={hero} />;
        })}
    </div>
  );
};

export default ComicHeros;
