import CardPulse from "@/ui/CardPulse";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <article className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4">
        <CardPulse /> 
      </div>
    </article>
  );
};

export default loading;
