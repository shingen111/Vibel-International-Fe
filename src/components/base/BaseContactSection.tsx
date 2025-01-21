import { useTranslations } from "next-intl";
import React from "react";
import BaseButtonWhite from "./BaseButtonWhite";
import { DEFINE_ROUTERS } from "@/constants/routers";

export default function BaseContactSection() {
  const t = useTranslations("contact");
  return (
    <div
      className="h-[490px] object-cover w-full bg-cover bg-center bg-no-repeat bg-header relative"
      style={{
        backgroundImage: 'url("/background/contact_bg.png")',
      }}
    >
      <div
        className="contact absolute right-0 top-[-14px] py-[67px] px-6 bg-[#2E6C92] flex flex-col justify-between items-start space-y-[44px] sm:w-[384px] w-[256px] min-h-[408px]"
      >
        <h3 className="text-sm font-[300] text-white">{t("title")}</h3>
        <p className="text-base text-white font-normal">{t("description")}</p>
        <BaseButtonWhite title={t("btn")} href={DEFINE_ROUTERS.bookMeeting} />
      </div>
    </div>
  );
}
