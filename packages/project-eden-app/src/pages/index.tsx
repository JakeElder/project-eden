import Head from "next/head";
import { TakeoverVideo } from "@mindfulstudio/project-eden-ui";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Eden | Be at home. Anywhere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TakeoverVideo
        src="https://player.vimeo.com/external/493189525.m3u8?s=b0d350d87e15e002cc3ea2556bfee0adfa75f770"
        poster="/Background.00_00_00_00.Still001.webp"
      />
    </div>
  );
}
