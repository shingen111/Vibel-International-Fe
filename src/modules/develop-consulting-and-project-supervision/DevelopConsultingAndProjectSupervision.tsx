import BaseContactSection from "@/components/base/BaseContactSection";
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
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] py-[48px] px-[76px]">
          <span className="text-[20px] font-normal text-black">
            {t("text_1")}
          </span>
          <ul className="list-disc list-inside ps-3 my-5">
            <li className="text-[20px] font-normal text-black">
              {t("text_2")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_3")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_4")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_5")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_6")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_7")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_8")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_9")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_10")}
            </li>
          </ul>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_11")}
          </span>
          <ul className="list-disc list-inside ps-3">
            <li className="text-[20px] font-normal text-black">
              {t("text_12")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_13")}
            </li>
            <li className="text-[20px] font-normal text-black">
              {t("text_14")}
            </li>
          </ul>
          <span className="text-[20px] font-normal text-black mt-5">
            {t("text_15")}
          </span>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
