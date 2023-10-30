"use client";

import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { MY_QUERY } from "../utilities/queries";
import { useMyQueryQuery } from "../generated/graphql";

export default function QueryResponse(): JSX.Element {
  const { data, loading } = useMyQueryQuery();

  if (loading) {
    return <div>Loading...</div>;
  } else if (data) {
    return <div>{data.posts.length}</div>;
  } else {
    return <></>;
  }
}
