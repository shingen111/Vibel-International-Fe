import InsightDetail from "@/modules/insight/insight-detail/InsightDetail";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import React from "react";

interface IProps {
  params: any;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export async function generateMetadata({ params }: Omit<IProps, "children">) {
  const { slug } = await params;
  const data = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: {
      slug,
    },
  });
  return {
    description: `Vibel International Blog - ${data.title}`,
  };
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
