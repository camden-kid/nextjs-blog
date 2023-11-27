"use client";

import { useGetPostQuery } from "../../_generated/graphql";

export default function Post({ params }) {
  const { data } = useGetPostQuery({
    variables: {
      id: parseInt(params.id),
    },
  });

  return <article>{data?.post[0]?.text}</article>;
}
