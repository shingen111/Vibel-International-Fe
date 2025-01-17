import Insights from "@/modules/insight/Insights";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, totalPostsQuery } from "@/sanity/lib/queries";
import { IParams, ISearchParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";
import { SanityDocument } from "next-sanity";

interface IProps {
  params: IParams;
  searchParams: ISearchParams;
}

const LIMIT_PAGE = 12;

export default async function page({ params, searchParams }: IProps) {
  const { locale } = await params;
  const { page } = await searchParams;
  const pageUpcase = Number(page);
  setRequestLocale(locale);

  const data = await sanityFetch<SanityDocument[]>({
    query: postsQuery(pageUpcase, LIMIT_PAGE),
  });
  const total = await sanityFetch<number>({
    query: totalPostsQuery,
  });
  return <Insights data={data} page={pageUpcase} total={total} limit={LIMIT_PAGE} />;
}
