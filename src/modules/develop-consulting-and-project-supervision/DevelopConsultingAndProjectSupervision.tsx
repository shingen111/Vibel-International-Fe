import BaseContactSection from "@/components/base/BaseContactSection";
import BaseRenderText from "@/components/base/BaseRenderText";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import React from "react";

export default function DevelopConsultingAndProjectSupervision() {
  const t = useTranslations("develop_consulting_and_project_supervision");
  return (
    <TheBody
      url="/header-bg/development-consulting.png"
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[56px]">
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] sm:py-[48px] sm:px-[76px] p-[24px]">
          <BaseRenderText text={t("text_1")} />
          <ul className="list-disc list-inside ps-3 my-5">
            <BaseRenderText text={t("text_2")} component="li" />
            <BaseRenderText text={t("text_3")} component="li" />
            <BaseRenderText text={t("text_4")} component="li" />
            <BaseRenderText text={t("text_5")} component="li" />
            <BaseRenderText text={t("text_6")} component="li" />
            <BaseRenderText text={t("text_7")} component="li" />
            <BaseRenderText text={t("text_8")} component="li" />
            <BaseRenderText text={t("text_9")} component="li" />
            <BaseRenderText text={t("text_10")} component="li" />
          </ul>
          <div className="my-5">
            <BaseRenderText text={t("text_11")} />
          </div>
          <ul className="list-disc list-inside ps-3">
            <BaseRenderText text={t("text_12")} component="li" />
            <BaseRenderText text={t("text_13")} component="li" />
            <BaseRenderText text={t("text_14")} component="li" />
          </ul>
          <div className="mt-5">
            <BaseRenderText text={t("text_15")} />
          </div>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
