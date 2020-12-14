import React from "react";
import { Person as PersonType } from "@mindfulstudio/project-eden-types";
import { css } from "@styled-system/css";

export type Props = PersonType & {};

function Person({ name }: Props) {
  return (
    <span
      css={css({
        color: "link.0",
      })}
    >
      {name}
    </span>
  );
}

Person.defaultProps = { name: "John Doe" } as Partial<Props>;

export default Person;
