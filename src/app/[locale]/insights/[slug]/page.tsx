import InsightDetail from "@/modules/insight/insight-detail/InsightDetail";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import React from "react";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

interface IProps {
  params: any;
}

export default async function page({ params }: IProps) {
  const { slug } = await params;
  const data = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: {
      slug,
    },
  });
  return <InsightDetail data={data} />;
}
