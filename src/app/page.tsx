import Catalogue from "@/components/Catalogue";
import CardPulse from "@/ui/CardPulse";
// import SearchBar from "@/components/SearchBar";
// import { searchSuperhero } from "@/lib/actions";

export default async function Superheros() {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* <form className="" action={searchSuperhero}>
        <SearchBar />
      </form> */}
      <article className="w-full">
        <Catalogue />
      </article>
    </section>
  );
}
