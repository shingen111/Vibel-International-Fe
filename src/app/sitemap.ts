import { groq } from "next-sanity";
import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { DEFINE_ROUTERS } from "@/constants/routers";

const LOCALES = ["en", "vi"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await sanityFetch<Record<string, MetadataRoute.Sitemap>>({
    query: groq`{
      'pages': *[
        _type == 'page' &&
        !(metadata.slug.current in ['404', 'blog/*']) &&
        metadata.noIndex != true
      ] | order(metadata.slug.current) {
        'url': $baseUrl + select(metadata.slug.current == 'index' => '', metadata.slug.current),
        'lastModified': _updatedAt,
        'priority': select(
          metadata.slug.current == 'index' => 1,
          0.5
        ),
      },
      'blog': *[_type == 'blog.post' && metadata.noIndex != true] | order(name) {
        'url': $baseUrl + 'blog/' + metadata.slug.current,
        'lastModified': _updatedAt,
        'priority': 0.4
      }
    }`,
    params: {
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "/",
    },
  });

  const pages = data.pages || [];
  const blogPosts = data.blog || [];

  const additionalPages = LOCALES.flatMap((locale) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(DEFINE_ROUTERS).map(([_, url]) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}${url}`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
    }))
  );

  const sitemap = [...pages, ...blogPosts, ...additionalPages];

  return sitemap;
}
