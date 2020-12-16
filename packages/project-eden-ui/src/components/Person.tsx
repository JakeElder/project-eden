import React from "react";
import { Person as PersonType } from "@mindfulstudio/project-eden-types";
import styled from "@emotion/styled";
import css from "@styled-system/css";

const T = styled.div(css({ color: "link.0" }));

export type Props = PersonType & {};

function Person({ name }: Props) {
  return (
    <>
      <span css={css({ color: "link.0" })}>{name}</span>
      <T>Styled Component</T>
    </>
  );
}

Person.defaultProps = { name: "John Doe" } as Partial<Props>;

export default Person;
