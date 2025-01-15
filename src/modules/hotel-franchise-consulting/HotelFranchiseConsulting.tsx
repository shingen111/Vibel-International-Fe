import BaseContactSection from "@/components/base/BaseContactSection";
import BaseRenderText from "@/components/base/BaseRenderText";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import React from "react";

export default function HotelFranchiseConsulting() {
  const t = useTranslations("hotel_franchise_consulting");
  return (
    <TheBody
      url="/header-bg/hotel-franchise-consulting.png"
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[56px]">
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] sm:py-[48px] sm:px-[76px] p-[24px]">
          <BaseRenderText text={t("text_1")} />
          <div className="my-5">
            <BaseRenderText text={t("text_2")} />
          </div>
          <div className="my-5">
            <BaseRenderText text={t("text_3")} />
          </div>
          <BaseRenderText text={t("text_4")} />
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_5")} component="li" />
            <BaseRenderText text={t("text_6")} component="li" />
          </ul>
          <BaseRenderText text={t("text_7")} />
          <div className="my-5">
            <BaseRenderText text={t("text_8")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_9")} component="li" />
            <BaseRenderText text={t("text_10")} component="li" />
            <BaseRenderText text={t("text_11")} component="li" />
            <BaseRenderText text={t("text_12")} component="li" />
            <BaseRenderText text={t("text_13")} component="li" />
            <BaseRenderText text={t("text_14")} component="li" />
            <BaseRenderText text={t("text_15")} component="li" />
            <BaseRenderText text={t("text_16")} component="li" />
            <BaseRenderText text={t("text_17")} component="li" />
          </ul>
          <div className="my-5">
            <BaseRenderText text={t("text_18")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_19")} component="li" />
            <BaseRenderText text={t("text_20")} component="li" />
            <BaseRenderText text={t("text_21")} component="li" />
          </ul>
          <div className="my-5">
            <BaseRenderText text={t("text_22")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_23")} component="li" />
            <BaseRenderText text={t("text_24")} component="li" />
            <BaseRenderText text={t("text_25")} component="li" />
            <BaseRenderText text={t("text_26")} component="li" />
            <BaseRenderText text={t("text_27")} component="li" />
            <BaseRenderText text={t("text_28")} component="li" />
            <BaseRenderText text={t("text_29")} component="li" />
            <BaseRenderText text={t("text_30")} component="li" />
            <BaseRenderText text={t("text_31")} component="li" />
            <BaseRenderText text={t("text_32")} component="li" />
            <BaseRenderText text={t("text_33")} component="li" />
          </ul>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
