"use client";

import { useParams } from "next/navigation";
import { useGetPostQuery } from "../../generated/graphql";

export default function Post() {
  const params = useParams();
  const { data } = useGetPostQuery({
    variables: {
      id: { $oid: params.id },
    },
  });

  return <article>{data?.post[0]?.title}</article>;
}
