import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import React from "react";
import ServiceLanding from "./landing/ServiceLanding";
import ChooseUs from "./landing/ChooseUs";
import BaseContactSection from "@/components/base/BaseContactSection";
import ListHotel from "./landing/ListHotel";
import InsightLanding from "./landing/InsightLanding";
import { SanityDocument } from "next-sanity";

interface IProps {
  posts: SanityDocument[];
}

export default function Home({ posts }: IProps) {
  const t = useTranslations("home");
  return (
    <TheBody url="/header-bg/header-bg-1.png" title={t("title")}>
      <div className="flex flex-col w-full space-y-[44px]">
        <ServiceLanding />
        <ChooseUs />
        <BaseContactSection />
        <ListHotel posts={posts.slice(0, 2)} />
        <InsightLanding posts={posts.slice(2)} />
      </div>
    </TheBody>
  );
}
