import Head from "next/head";
import { Person } from "@mindfulstudio/project-eden-ui";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Person name="CSS Component" />
    </div>
  );
}
