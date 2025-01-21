import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { client } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "@/i18n/routing";
import { DEFINE_ROUTERS } from "@/constants/routers";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { formatDate } from "@/utils/format-date";
import Visibility from "@/components/base/Visibility";

type IProps = {
  data: SanityDocument;
};

const builder = imageUrlBuilder(client);

export default function InsightDetail({ data }: IProps) {
  const t = useTranslations();

  const breadcrumbs = (
    <div className="w-full mb-3">
      <div className="sm:container bg-transparent py-3">
        <Breadcrumbs>
          <Link href={DEFINE_ROUTERS.insights}>
            <Typography color="primary" className="underline">
              Insights
            </Typography>
          </Link>
          <Typography>{data?.title}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );

  return (
    <TheBody
      url="/header-bg/insight.png"
      title={t("insights.title")}
      description={t("insights.description")}
    >
      <div className="flex flex-col justify-start items-center w-full">
        {breadcrumbs}
        <div className="sm:container flex flex-col justify-start items-center max-w-screen-sm space-y-5 mb-10">
          {data?.mainImage ? (
            <Image
              src={builder
                .image(data.mainImage)
                .fit("scale")
                .width(1120)
                .height(600)
                .url()}
              alt={data?.mainImage?.alt ?? "alt"}
              className="sm:min-h-[600px] min-h-[240px] w-full object-cover"
              width={1120}
              height={600}
            />
          ) : null}
          <div className="flex justify-start items-center w-full space-x-3">
            <EventNoteIcon color="primary" />
            <span>{formatDate(data?._createdAt ?? "")}</span>
          </div>
          <h1 className="sm:text-4xl w-full text-start font-bold">
            {data?.title}
          </h1>
          <Typography
            component="span"
            className="sm:text-4xl w-full text-start font-bold text-[#808284]"
          >
            {data?.description}
          </Typography>
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
