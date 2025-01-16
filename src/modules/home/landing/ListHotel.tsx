import Visibility from "@/components/base/Visibility";
import { Link } from "@/i18n/routing";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import React from "react";

export default async function ListHotel() {
  const t = useTranslations("list_hotel");
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery(1, 2),
  });

  return (
    <Visibility visibility={posts.length}>
      <div className="w-full min-h-[586px] pt-[96px] grid sm:grid-cols-2 grid-cols-1">
        <Visibility visibility={posts[0]?.title}>
          <div className="h-full relative sm:min-w-[384px] min-w-screen-sm">
            <Image
              src={posts[0]?.imageURL}
              width={1220}
              height={1220}
              alt="img_1"
              className="object-cover w-full h-full"
            />
            <div className="absolute sm:right-0 left-0 sm:left-auto top-[-96px] sm:py-[44px] py-[24px] px-6 bg-[#2E6C92] flex flex-col justify-start items-start sm:min-h-[490px] space-y-[16px] max-w-[256px] sm:max-w-[384px]">
              <h3 className="tsm:text-sm text-xs font-[300] text-white">
                {posts[0]?.categories[0].name}
              </h3>
              <p className="sm:text-4xl text-xl text-white font-normal">
                {posts[0]?.title}
              </p>
              <p className="sm:text-sm text-xs text-white font-extralight">
                {posts[0]?.description}
              </p>
              <Link
                href={`insights/${posts[0]?.slug.current}`}
                className="text-white sm:text-sm text-xs font-extralight !mt-[38px] underline"
              >
                {t("READ MORE")}
              </Link>
            </div>
          </div>
        </Visibility>
        <Visibility visibility={posts[1]?.title}>
          <div
            className="h-full sm:max-w-full max-w-screen-sm relative bg-cover bg-center bg-no-repeat bg-header min-h-[186px]"
            style={{
              backgroundImage: `url(${posts[1]?.imageURL})`,
            }}
          >
            <div className="max-w-[256px] py-[24px] sm:py-[44px] px-6 flex flex-col justify-start items-start bg-white h-full sm:max-w-[384px] sm:float-start float-end">
              <h3 className="sm:text-sm text-xs text-[#2E6C92] font-extralight">
                {posts[1]?.categories && posts[1]?.categories[0].name}
              </h3>
              <p className="uppercase sm:text-4xl text-xl font-normal text-black sm:mt-[37px] mt-[12px]">
                {posts[1]?.title}
              </p>
              <p className="sm:mt-[110px] mt-[20px] sm:text-sm text-xs font-extralight">
                {posts[1]?.description}
              </p>
              <Link
                href={`insights/${posts[1]?.slug.current}`}
                className="text-[#2E6C92] sm:text-sm text-xs font-extralight mt-[38px] underline"
              >
                {t("READ MORE")}
              </Link>
            </div>
          </div>
        </Visibility>
      </div>
    </Visibility>
  );
}
