import React from "react";

const CardPulse: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-center items-center mb-10">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CardPulse;
