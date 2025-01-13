import { useTranslations } from "next-intl";
import React from "react";
import BaseButtonWhite from "./BaseButtonWhite";

export default function BaseContactSection() {
  const t = useTranslations("contact");
  return (
    <div
      className="h-[490px] object-cover w-full bg-cover bg-center bg-no-repeat bg-header relative"
      style={{
        backgroundImage: 'url("/background/contact_bg.png")',
      }}
    >
      <div className="absolute left-[40%] top-[-14px] py-[67px] px-6 bg-[#2E6C92] flex flex-col justify-between items-start space-y-[44px] w-[384px] min-h-[408px]">
        <h3 className="text-sm font-[300] text-white">{t("title")}</h3>
        <p className="text-base text-white font-normal">
          {t("description")}
        </p>
        <BaseButtonWhite title={t("btn")} />
      </div>
    </div>
  );
}
