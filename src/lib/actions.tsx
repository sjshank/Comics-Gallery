"use server";

import { TComicSuperheroes } from "@/interfaces/TSuperHero";

export const searchSuperhero = async (requestParam: string) => {
  if (requestParam === null || requestParam === "undefined") {
    return { message: "Invalid query provided !" };
  }

  try {
    const res = await fetch(
      (process.env.NEXT_PUBLIC_SUPERHEROS_URL as string).concat(
        `/?hero=${requestParam}`
      ),
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY as string,
        },
      }
    );
    if (!res.ok) {
      console.log(res.status);
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    if (!data) {
      return {
        message: "No data found",
      };
    } else {
      return data;
    }
  } catch (e) {
    console.error("Database Error:", e);
    return {
      message: "Failed to fetch record. Max request quota reached.",
    };
  }
};

export const getAllHeros = async (): Promise<TComicSuperheroes> => {
  try {
    const res = await fetch(
      (process.env.NEXT_PUBLIC_SUPERHEROS_URL as string) + "/heroes",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY as string,
        },
        next: {
          revalidate: 30,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    if (!data) {
      return {
        error: { message: "No data found" },
        superheroes: [],
      };
    } else {
      return {
        error: null,
        superheroes: data,
      };
    }
  } catch (e) {
    console.error("Database Error:", e);
    return {
      error: { message: "Failed to fetch records. Max request quota reached." },
      superheroes: [],
    };
  }
};

export const getAllVillains = async (): Promise<TComicSuperheroes> => {
  try {
    const res = await fetch(
      (process.env.NEXT_PUBLIC_SUPERHEROS_URL as string) + "/villains",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY as string,
        },
        next: {
          revalidate: 30,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    if (!data) {
      return {
        error: { message: "No data found" },
        superheroes: [],
      };
    } else {
      return {
        error: null,
        superheroes: data,
      };
    }
  } catch (e) {
    console.error("Database Error:", e);
    return {
      error: { message: "Failed to fetch records. Max request quota reached." },
      superheroes: [],
    };
  }
};
