import BaseContactSection from "@/components/base/BaseContactSection";
import BaseRenderText from "@/components/base/BaseRenderText";
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
        <div className="flex flex-col justify-start items-start bg-[#F5F5F5] sm:py-[48px] sm:px-[76px] space-y-10 p-[24px]">
          <BaseRenderText text={t("text_1")} />
          <BaseRenderText text={t("text_2")} />
          <BaseRenderText text={t("text_3")} />
          <BaseRenderText text={t("text_4")} />
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
