import React from "react";

type SubHeaderProps = {
  headerLbl: string;
  classname: string;
};

const SubHeader = ({ classname, headerLbl }: SubHeaderProps) => {
  return (
    <div className="container mx-auto p-5">
      <h2 className={classname}>{headerLbl}</h2>
    </div>
  );
};

export default SubHeader;
