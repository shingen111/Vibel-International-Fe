import ImageHover from "@/components/base/ImageHover";
import Visibility from "@/components/base/Visibility";
import { Link } from "@/i18n/routing";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import React from "react";

export default async function InsightLanding() {
  const t = useTranslations("");
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery(1, 3),
  });

  return (
    <Visibility visibility={posts.length}>
      <div className="flex flex-col justify-start items-center space-y-6 w-full bg-white !mt-24 sm:m-auto">
        <h3 className="text-4xl text-black font-normal uppercase">insights</h3>
        <div className="flex sm:flex-row flex-col justify-start items-start sm:space-x-[100px] space-x-0 sm:space-y-0 space-y-5">
          {posts.map((item, index) => (
            <div
              className="flex flex-col justify-start items-center w-[329px] min-h-[364px]"
              key={index}
            >
              <div className="w-full h-[184px]">
                <ImageHover src={item.imageURL} alt={item.mainImage.alt} />
              </div>
              <Visibility visibility={item.categories.length}>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  {item.categories.map((category: string, subIndex: number) => (
                    <span key={subIndex} className="mr-[4px]">
                      {category}
                    </span>
                  ))}
                </Stack>
              </Visibility>
              <span className="text-start text-[20px] font-[700] mt-[18px] w-full">
                {item.title}
              </span>
              <p className="mt-[16px] text-base text-[#808284] font-normal text-start w-full">
                {item.description}
              </p>
              <Link
                href={`insights/${item.slug.current}`}
                className="text-start text-[#2E6C92] text-base font-normal w-full first-letter:uppercase"
              >
                {t("read_more")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Visibility>
  );
}
