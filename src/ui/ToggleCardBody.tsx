"use client";

import { TSuperHero } from "@/interfaces/TSuperHero";
import { usePathname } from "next/navigation";
import React from "react";

type ToogleCardBodyProps = {
  children: React.ReactNode;
  superhero: TSuperHero;
};

const ToggleCardBody = ({ children, superhero }: ToogleCardBodyProps) => {
  const pathname = usePathname();
  return <>{superhero && pathname !== "/" && children}</>;
};

export default ToggleCardBody;
