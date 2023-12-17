"use client";

import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button: React.FunctionComponent<ButtonProps> = ({
  ...btnAttributes
}: ButtonProps): JSX.Element => {
  return <button {...btnAttributes}>{btnAttributes.title}</button>;
};
