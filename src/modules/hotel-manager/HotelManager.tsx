import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import React from "react";

export default function HotelManager() {
  const t = useTranslations("hotel_manager");
  return (
    <TheBody
      url="/header-bg/hotel-manager.png"
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[56px]">
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] py-[48px] px-[76px] space-y-10">
          <span className="text-[20px] font-normal text-black">
            {t("text_1")}
          </span>
          <span className="text-[20px] font-normal text-black">
            {t("text_2")}
          </span>
          <span className="text-[20px] font-normal text-black">
            {t("text_3")}
          </span>
          <span className="text-[20px] font-normal text-black">
            {t("text_4")}
          </span>
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
