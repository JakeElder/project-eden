import type { AppProps } from "next/app";
import { Theme } from "@mindfulstudio/project-eden-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
