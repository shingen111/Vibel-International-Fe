import Visibility from "@/components/base/Visibility";
import { Link } from "@/i18n/routing";
import displayDescription from "@/utils/display-description";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import React from "react";

interface IProps {
  posts: SanityDocument[];
}

export default function ListHotel({ posts }: IProps) {
  const t = useTranslations("list_hotel");

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
              <Visibility visibility={posts[0]?.categories !== null}>
                {posts[0]?.categories?.map((_item: any, index: number) => (
                  <span
                    key={index}
                    className="text-white sm:text-sm text-xs font-[300]"
                  >
                    {_item.name}
                  </span>
                ))}
              </Visibility>

              <p className="sm:text-4xl text-xl text-white font-normal">
                {posts[0]?.title}
              </p>
              <p className="sm:text-sm text-xs text-white font-extralight">
                {displayDescription(posts[0]?.description)}
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
              {posts[1]?.categories && (
                <h3 className="tsm:text-sm text-xs font-[300] text-white">
                  {posts[1]?.categories[1]?.name}
                </h3>
              )}
              <p className="uppercase sm:text-4xl text-xl font-normal text-black sm:mt-[37px] mt-[12px]">
                {posts[1]?.title}
              </p>
              <p className="sm:mt-[110px] mt-[20px] sm:text-sm text-xs font-extralight">
                {displayDescription(posts[1]?.description)}
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
