import React from "react";
import TakeoverVideo from "../components/TakeoverVideo";
import LinearLogo from "../components/LinearLogo";

import type { Props as TakeoverVideoProps } from "../components/TakeoverVideo";

export type Props = TakeoverVideoProps & {
  transition?: React.FunctionComponent<{}>;
};

function VideoTakeoverHeader({
  src,
  poster,
  verticalOverflow,
  transition: Transition = () => null,
}: Props) {
  return (
    <>
      <TakeoverVideo
        src={src}
        poster={poster}
        verticalOverflow={verticalOverflow}
      >
        <div css={{ padding: 40 }}>
          <LinearLogo width={400} />
        </div>
      </TakeoverVideo>
      <Transition />
    </>
  );
}

export default VideoTakeoverHeader;
