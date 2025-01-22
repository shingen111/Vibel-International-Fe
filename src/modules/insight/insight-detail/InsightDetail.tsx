import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { formatDate } from "@/utils/format-date";
import Visibility from "@/components/base/Visibility";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type IProps = {
  data: SanityDocument;
  slug: string;
  locale: "en" | "vi";
};

const builder = imageUrlBuilder(client);

export default function InsightDetail({ data, slug, locale }: IProps) {
  const t = useTranslations("general");
  return (
    <TheBody
      className="flex justify-center items-center bg-white"
      url={builder
        .image(data.mainImage)
        .fit("scale")
        .width(1120)
        .height(600)
        .url()}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="sm:maw-w-[713px] sm:px-0 px-5 flex flex-col justify-start items-start max-w-screen-sm mb-[90px]">
          <Box my={1}>
            <Visibility visibility={data.mainImage.alt}>
              <Typography
                component="p"
                fontSize={12}
                fontWeight={200}
                color="#000000"
              >
                {data.mainImage.alt}
              </Typography>
            </Visibility>
          </Box>
          <div className="border-t-[1px] border-[#2E6C92] flex flex-row justify-start items-center space-x-1 pt-2">
            <Typography
              className="uppercase"
              color="#2E6C92"
              fontSize="14px"
              fontWeight={200}
            >
              {t("by")}
            </Typography>
            <Visibility visibility={data.authorName}>
              <Typography
                color="#2E6C92"
                fontSize="14px"
                fontWeight={200}
                className="uppercase"
              >
                {data.authorName}
              </Typography>
            </Visibility>
            <Typography
              className="uppercase"
              color="#2E6C92"
              fontSize="14px"
              fontWeight={200}
            >
              {formatDate(data._createdAt, "MMMM D, YYYY")}
            </Typography>
          </div>
          <Link
            data-href="https://developers.facebook.com/docs/plugins/"
            href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
              `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/insights/${slug}`
            )}`}
            rel="noopener"
            className="hover:cursor-pointer mt-[30px] mg-[10px]"
            target="_blank"
          >
            <Typography
              className="uppercase"
              color="#2E6C92"
              fontSize="14px"
              fontWeight={700}
            >
              {t("share")}
            </Typography>
            <div className="h-[1.5px] w-[26px] bg-[#2E6C92]"></div>
            <Image
              height={12}
              className="mt-[19.5px]"
              width={12}
              src="/icons/facebook.svg"
              alt="Facebook"
            />
          </Link>
          <h1 className="sm:text-[45px] text-[32px] w-full text-start font-bold">
            {data?.title}
          </h1>
          <p className="sm:text-[23px] w-full text-start font-[200] text-[#000000] my-[20px]">
            {data?.description}
          </p>
          <Visibility visibility={data?.body}>
            <div className="h-full w-full flex flex-col justify-start items-start">
              <PortableText value={data?.body} />
            </div>
          </Visibility>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
