"use client";

import { useGetPostQuery } from "../../generated/graphql";

export default function Post({ params }) {
  const { data } = useGetPostQuery({
    variables: {
      id: parseInt(params.id),
    },
  });

  return <article>{data?.post[0]?.title}</article>;
}
