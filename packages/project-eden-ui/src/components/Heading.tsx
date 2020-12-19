import React from "react";
import css from "@styled-system/css";

type Props = { children: string };

function Heading({ children }: Props) {
  return (
    <h1
      css={css({
        color: "link.1",
      })}
    >
      {children}
    </h1>
  );
}

Heading.defaultProps = {} as Partial<Props>;

export default Heading;
