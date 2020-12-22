import React from "react";
import { Story, Meta } from "@storybook/react";
import VideoTakeoverHeader from "../src/layouts/VideoTakeoverHeader";
import poster from "../public/Background.00_00_00_00.Still001.webp";

import type { Props as VideoTakeoverHeaderProps } from "../src/layouts/VideoTakeoverHeader";

export default {
  title: "Layouts / VideoTakeoverHeader",
  component: VideoTakeoverHeader,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    src:
      "https://player.vimeo.com/external/493189525.m3u8?s=b0d350d87e15e002cc3ea2556bfee0adfa75f770",
    poster,
  },
} as Meta;

export const Default: Story<VideoTakeoverHeaderProps> = (args) => (
  <VideoTakeoverHeader {...args} />
);
