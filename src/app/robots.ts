import { DEFINE_ROUTERS } from "@/constants/routers";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: [
          DEFINE_ROUTERS.home,
          DEFINE_ROUTERS.hotelManager,
          DEFINE_ROUTERS.hotelFranchiseConsulting,
          DEFINE_ROUTERS.exploreHotelBrands,
          DEFINE_ROUTERS.developConsulting,
          DEFINE_ROUTERS.insights,
          DEFINE_ROUTERS.aboutUs,
          DEFINE_ROUTERS.bookMeeting,
        ],
        disallow: ["/studio/", "/admin/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
