import BaseContactSection from "@/components/base/BaseContactSection";
import BaseRenderText from "@/components/base/BaseRenderText";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const DEFINE_EXPERT = [
  {
    name: "PHILLIP LEYSEN",
    avatar: "/about-us/expert_1.png",
    position: "CHAIRMAN CO-FOUNDER",
  },
  {
    name: "VŨ XUÂN KHANG",
    avatar: "/about-us/expert_2.png",
    position: "PROJECT MANAGEMENT AND DEVELOPMENT CO-FOUNDER",
  },
  {
    name: "LEOH MING PEI",
    avatar: "/about-us/expert_3.png",
    position: "HONORARY ADVISOR ARCHITECT (1917 - 2019, Deceased)",
  },
  {
    name: "ALEXANDER BUROG BUKIS",
    avatar: "/about-us/expert_4.png",
    position: "PRE-OPENING DIRECTOR HOTEL MANAGEMENT",
  },
  {
    name: "PATRICK FERNANDEZ",
    avatar: "/about-us/expert_5.png",
    position: "PROJECT DEVELOPMENT DIRECTOR",
  },
  {
    name: "NGUYỄN QUANG THẮNG",
    avatar: "/about-us/expert_6.png",
    position: "DESIGN DIRECTOR",
  },
];

export default function AboutUsPage() {
  const t = useTranslations("about_us");
  return (
    <TheBody
      url="/header-bg/about_us.png"
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[56px]">
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] w-full sm:py-[61px] sm:px-[76px] p-[24px]">
          <BaseRenderText text={t("text_1")} />
          <BaseRenderText text={t("text_2")} />
          <BaseRenderText text={t("text_3")} />
        </div>
        <h1 className="sm:text-[50px] text-[32px] font-normal text-center sm:max-w-[860px] max-w-screen-sm">
          {t("text_4")}
        </h1>
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] sm:py-[61px] sm:px-[76px] p-[24px] w-full">
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_5")} component="li" />
            <BaseRenderText text={t("text_6")} component="li" />
            <BaseRenderText text={t("text_7")} component="li" />
            <BaseRenderText text={t("text_8")} component="li" />
            <BaseRenderText text={t("text_9")} component="li" />
            <BaseRenderText text={t("text_10")} component="li" />
          </ul>
        </div>
        <div className="flex flex-col justify-start items-center bg-[#F5F5F5] sm:py-[61px] sm:px-[76px] p-[24px] w-full space-y-[34px] !mt-[28px]">
          <h3 className="text-[32px] text- font-normal text-center">
            {t("text_11")}
          </h3>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-[14px] gap-y-[34px]">
            {DEFINE_EXPERT.map((item, index) => (
              <div
                key={index}
                className="sm:w-[376px] sm:h-[370px] min-h-[286px] pt-[32px] space-y-[28px] bg-white px-1"
              >
                <div className="flex justify-center items-center">
                  <Image
                    className="rounded-full"
                    height={128}
                    width={128}
                    src={item.avatar}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="sm:text-[28px] text-lg font-medium text-black text-center">
                    {item.name}
                  </span>
                  <span className="sm:text-[14px] text-xs font-normal text-[#707070] text-center">
                    {item.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
