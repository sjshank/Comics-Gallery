import { TSuperHero } from "@/interfaces/TSuperHero";
import KnowMore from "@/ui/KnowMore";
import Image from "next/image";
import React from "react";
import SuperheroCardBody from "./SuperheroCardBody";
import ToggleCardBody from "@/ui/ToggleCardBody";

type SuperheroCardProps = {
  superhero: TSuperHero;
};

const SuperheroCard = ({ superhero }: SuperheroCardProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex lg:h-32 md:h-32 lg:items-center items-center mx-auto border-b border-gray-200 pb-5 mb-5 sm:flex-row flex-col">
        <div className="relative h-20 w-20 sm:mr-4 inline-flex items-center justify-center rounded-full bg-gray-100  flex-shrink-0">
          <Image
            src={superhero?.images?.lg}
            alt={superhero.name}
            fill
            priority
            sizes="15vw"
            className="rounded-full"
          />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-slate-900 text-lg title-font font-normal mb-2">
            {superhero.name}
          </h2>
          <p className="leading-normal text-sm font-serif">
            {superhero?.connections?.groupAffiliation}
          </p>
          {superhero && <KnowMore name={superhero.name} />}
        </div>
      </div>
      <ToggleCardBody superhero={superhero}>
        <div className="w-full">
          <SuperheroCardBody {...superhero} />
        </div>
      </ToggleCardBody>
    </div>
  );
};

export default SuperheroCard;
