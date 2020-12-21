import React from "react";
import { Story, Meta, Parameters } from "@storybook/react";
import TakeoverVideo, {
  Props as TakeoverVideoProps,
} from "../src/components/TakeoverVideo";

export default {
  title: "Components / Takeover Video",
  component: TakeoverVideo,
  parameters: { layout: "fullscreen" },
  args: {
    src:
      "https://player.vimeo.com/external/493189525.m3u8?s=b0d350d87e15e002cc3ea2556bfee0adfa75f770",
  },
} as Meta;

export const Default: Story<TakeoverVideoProps> = (args) => (
  <TakeoverVideo {...args} />
);

export const WithContentBeneath: Story<{}> = (args) => (
  <div>
    <TakeoverVideo {...args} />
    <div css={{ height: 100, backgroundColor: "SkyBlue" }}></div>
  </div>
);
