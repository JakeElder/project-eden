import React from "react";
import { Person as PersonType } from "@mindfulstudio/project-eden-types";

export type Props = PersonType & {};

function Person({ name }: Props) {
  return <span>{name}</span>;
}

Person.defaultProps = { name: "John Doe" } as Partial<Props>;

export default Person;
