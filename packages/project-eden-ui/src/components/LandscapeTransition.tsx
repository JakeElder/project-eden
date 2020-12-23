import React from "react";
import CutoutTransition from "./CutoutTransition";

export type Props = { landscapeSrc: string };

function LandscapeTransition({ landscapeSrc }: Props) {
  return (
    <CutoutTransition
      src={landscapeSrc}
      height={100}
      imageOffset={-320}
      overlap={63}
    />
  );
}

export default LandscapeTransition;
