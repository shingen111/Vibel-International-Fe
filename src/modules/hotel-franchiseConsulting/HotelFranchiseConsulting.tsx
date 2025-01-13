import BaseContactSection from "@/components/base/BaseContactSection";
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
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] py-[48px] px-[76px]">
          <span className="text-[20px] font-normal text-black">
            {t("text_1")}
          </span>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_2")}
          </span>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_3")}
          </span>
          <span className="text-[20px] font-normal text-black">
            {t("text_4")}
          </span>
          <ul className="list-disc list-inside ps-3">
            <li className="text-[20px] font-normal text-black">{t("text_5")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_6")}</li>
          </ul>
          <span className="text-[20px] font-normal text-black">
            {t("text_7")}
          </span>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_8")}
          </span>
          <ul className="list-disc list-inside ps-3">
            <li className="text-[20px] font-normal text-black">{t("text_9")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_10")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_11")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_12")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_13")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_14")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_15")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_16")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_17")}</li>
          </ul>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_18")}
          </span>
          <ul className="list-disc list-inside ps-3">
            <li className="text-[20px] font-normal text-black">{t("text_19")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_20")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_21")}</li>
          </ul>
          <span className="text-[20px] font-normal text-black my-5">
            {t("text_22")}
          </span>
          <ul className="list-disc list-inside ps-3">
            <li className="text-[20px] font-normal text-black">{t("text_23")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_24")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_25")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_26")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_27")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_28")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_29")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_30")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_31")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_32")}</li>
            <li className="text-[20px] font-normal text-black">{t("text_33")}</li>
          </ul>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
