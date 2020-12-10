import React from "react";

export type Props = { name: string };

function Person({ name }: Props) {
  return <span>{name}</span>;
}

Person.defaultProps = { name: "John Doe" } as Partial<Props>;

export default Person;
