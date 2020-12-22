import React from "react";
import TakeoverVideo from "../components/TakeoverVideo";
import LinearLogo from "../components/LinearLogo";

import type { Props as TakeoverVideoProps } from "../components/TakeoverVideo";

export type Props = {} & TakeoverVideoProps;

function VideoTakeoverHeader({ src, poster }: Props) {
  return (
    <TakeoverVideo src={src} poster={poster}>
      <div css={{ padding: 40 }}>
        <LinearLogo width={400} />
      </div>
    </TakeoverVideo>
  );
}

export default VideoTakeoverHeader;
