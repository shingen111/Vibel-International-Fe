import TheLayout from "@/components/layout/TheLayout";
import Home from "@/modules/home/Home";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { IParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";
import { SanityDocument } from "next-sanity";

interface IProps {
  params: IParams;
}

export default async function page({ params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery(1, 5),
  });
  return (
    <TheLayout>
      <Home posts={posts} />;
    </TheLayout>
  );
}
