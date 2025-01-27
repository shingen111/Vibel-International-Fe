import BaseContactSection from "@/components/base/BaseContactSection";
import BaseRenderText from "@/components/base/BaseRenderText";
import VideoComponent from "@/components/base/VideoComponent";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Representative() {
  const t = useTranslations("representative");
  return (
    <TheBody url="/header-bg/representative.png" title={t("title")}>
      <div className="flex flex-col justify-start items-center w-full space-y-[56px]">
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] sm:py-[34px] sm:px-[83px] space-y-10 p-[24px] w-full">
          <BaseRenderText text={t("text_1")} />
          <div className="flex flex-col">
            <BaseRenderText text={t("text_2")} />
            <BaseRenderText text={t("text_3")} />
            <BaseRenderText text={t("text_4")} />
          </div>
          <div className="flex flex-col">
            <BaseRenderText text={t("text_5")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_6")} component="li"/>
            <BaseRenderText text={t("text_7")} component="li" />
            <BaseRenderText text={t("text_8")} component="li" />
            <BaseRenderText text={t("text_9")} component="li" />
            <BaseRenderText text={t("text_10")} component="li" />
            <BaseRenderText text={t("text_11")} component="li" />
          </ul>
          <div className="flex flex-col">
            <BaseRenderText text={t("text_12")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_13")} component="li"/>
            <BaseRenderText text={t("text_14")} component="li" />
            <BaseRenderText text={t("text_15")} component="li" />
            <BaseRenderText text={t("text_16")} component="li" />
            <BaseRenderText text={t("text_17")} component="li" />
          </ul>
          <div className="flex flex-col">
            <BaseRenderText text={t("text_18")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_19")} component="li"/>
            <BaseRenderText text={t("text_20")} component="li" />
            <BaseRenderText text={t("text_21")} component="li" />
            <BaseRenderText text={t("text_22")} component="li" />
            <BaseRenderText text={t("text_23")} component="li" />
            <BaseRenderText text={t("text_24")} component="li" />
            <BaseRenderText text={t("text_25")} component="li" />
            <BaseRenderText text={t("text_26")} component="li" />
          </ul>
        </div>
        <Image className="object-cover" height={450} width={800} src={"/representative/representative-img.png"} alt="representative-img"/>
        <VideoComponent src="/representative/WHG-008.mp4" />
        <VideoComponent src="/representative/WHG-007.mp4" />
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
