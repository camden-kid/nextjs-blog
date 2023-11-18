"use client";

import { useAllPostsQuery } from "../generated/graphql";

export default function QueryResponse(): JSX.Element {
  const { data, loading } = useAllPostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  } else if (data) {
    return <div>{data.posts.length}</div>;
  } else {
    return <></>;
  }
}
