import TheLayout from "@/components/layout/TheLayout";
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
  const pageUpcase = Number(page ?? 1);
  setRequestLocale(locale);

  const data = await sanityFetch<SanityDocument[]>({
    query: postsQuery(pageUpcase, LIMIT_PAGE),
  });
  console.log("🚀 ~ page ~ data:", data)
  const total = await sanityFetch<number>({
    query: totalPostsQuery,
  });
  return (
    <TheLayout>
      <Insights
        data={data}
        page={pageUpcase}
        total={total}
        limit={LIMIT_PAGE}
      />
    </TheLayout>
  );
}
