export type TSuperHero = {
  id: number;
  name: string;
  slug: string;
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  powerStats: TPowerstats;
  appearance: TAppearance;
  biography: TBiography;
  images: {
    sm: string;
    lg: string;
    md: string;
    xs: string;
  };
};

export type TPowerstats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export type TAppearance = {
  gender: string;
  race: null | undefined;
  height: [""];
  weight: [""];
  eyeColor: string;
  hairColor: string;
};

export type TBiography = {
  fullName?: string;
  alterEgos: string;
  aliases: [""];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

export type TError = {
  message: string;
};

export type TComicSuperheroes = {
  error: TError | null;
  superheroes: TSuperHero[];
};
