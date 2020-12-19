import Head from "next/head";
import { Person, Heading } from "@mindfulstudio/project-eden-ui";
import type { Person as PersonType } from "@mindfulstudio/project-eden-types";
import { gql, useQuery } from "@apollo/client";

const PEOPLE = gql`
  query UsersQuery {
    users(where: { email: "john.doe@example.com" }) {
      id
      username
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<{ users: PersonType[] }>(PEOPLE);

  if (loading) return <span>Loading...</span>;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (typeof data === "undefined") {
    return <span>No data</span>;
  }

  const { users } = data;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Heading</Heading>
      <Person name={users[0].username} />
    </div>
  );
}
