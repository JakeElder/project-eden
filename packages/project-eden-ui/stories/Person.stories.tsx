import React from "react";
import { Story, Meta } from "@storybook/react";
import Person, { Props as PersonProps } from "../src/components/Person";

export default {
  title: "Components/Person",
  component: Person,
} as Meta;

export const Default: Story<PersonProps> = (args) => <Person {...args} />;
