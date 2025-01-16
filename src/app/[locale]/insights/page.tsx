import Insights from "@/modules/insight/Insights";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, totalPostsQuery } from "@/sanity/lib/queries";
import { IParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";
import { SanityDocument } from "next-sanity";

interface IProps {
  params: IParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LIMIT_PAGE = 1;

export default async function page({ params, searchParams }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = Number(searchParams?.page ?? 1);
  
  const data = await sanityFetch<SanityDocument[]>({ query: postsQuery(page, LIMIT_PAGE) });
  const total = await sanityFetch<number>({
    query: totalPostsQuery
  })
  return <Insights data={data} page={page} total={total} limit={LIMIT_PAGE}/>;
}
