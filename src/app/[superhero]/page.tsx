import SuperheroCard from "@/components/SuperheroCard";
import { TSuperHero } from "@/interfaces/TSuperHero";
import { getAllHeros, getAllVillains, searchSuperhero } from "@/lib/actions";
import Error from "@/ui/Error";
import SubHeader from "@/ui/SubHeader";
import Link from "next/link";
import React from "react";

const Superhero = async ({ params }: { params: { superhero: string } }) => {
  const superhero = await searchSuperhero(
    params ? decodeURI(params.superhero).toString() : ""
  );
  let hasError = false;
  let errorMessage = "";

  if (Object.keys(superhero).includes("message")) {
    hasError = true;
    errorMessage = superhero["message"];
  }

  return (
    <section>
      <article className="w-full mb-8">
        <div className="grid grid-rows-1 place-items-center ">
          {hasError && <Error message={errorMessage} />}
          {!hasError && (
            <>
              <SubHeader
                classname="text-marron-txt text-3xl text-center font-medium font-serif leading-10 row-span-1"
                headerLbl={`${superhero.name} - ${superhero?.biography?.fullName}`}
              />
              <div className="grid row-span-1 gap-4 place-content-start place-items-center ">
                <div className="col-start-2 col-span-4">
                  <SuperheroCard superhero={superhero} />
                </div>
              </div>
            </>
          )}
        </div>
      </article>
      <Link
        href={`/`}
        className="mt-3 text-marron-txt inline-flex text-lg underline-offset-2 underline items-center font-mono"
      >
        Back To Home
      </Link>
    </section>
  );
};

export default Superhero;

// Below approach won't be useful as data is random
// export const generateStaticParams = async () => {
//   const [allHereos, allVillians] = (await Promise.allSettled([
//     getAllVillains(),
//     getAllHeros(),
//   ])) as PromiseFulfilledResult<TSuperHero[]>[];
//   const result = allHereos.value.concat(allVillians.value);
//   return result.map((data: TSuperHero) => {
//     return {
//       superhero: data?.name,
//     };
//   });
// };
