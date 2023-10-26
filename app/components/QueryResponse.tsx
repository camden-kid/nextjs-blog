"use client";

import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { MY_QUERY } from "../utilities/queries";

export default function QueryResponse(): JSX.Element {
  const { data, loading } = useQuery(MY_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data.posts.length}</div>;
}
