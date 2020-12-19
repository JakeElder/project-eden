import React from "react";
import { Story, Meta } from "@storybook/react";
import Heading, { Props as HeadingProps } from "../src/components/Heading";

export default {
  title: "Heading",
  component: Heading,
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;
