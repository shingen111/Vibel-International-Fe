import ImageHover from "@/components/base/ImageHover";
import { useTranslations } from "next-intl";
import React from "react";

export default function ChooseUs() {
  const t = useTranslations("choose_us_landing");

  const DEFINE_ITEMS = [
    {
      img: "/landing/choose-us/choose_us_1.png",
      title: t("Extensive Expertise"),
      description: t("Over 10 years of experience in the hospitality industry"),
      isRevert: false,
    },
    {
      img: "/landing/choose-us/choose_us_2.png",
      title: t("Global Network"),
      description: t("Strong connections with leading hotel brands worldwide"),
      isRevert: true,
    },
    {
      img: "/landing/choose-us/choose_us_3.png",
      title: t("Flexible Solutions"),
      description: t("Tailored to meet the specific needs of each project"),
      isRevert: false,
    },
    {
      img: "/landing/choose-us/choose_us_4.png",
      title: t("Commitment to Quality"),
      description: t("Delivering results that exceed expectations"),
      isRevert: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-12 space-y-7 w-full bg-[#F5F5F5]">
      <h3 className="text-4xl text-black font-normal">
        {t("WHY YOU CHOOSE US")}
      </h3>
      <div className="w-full">
        {DEFINE_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full ${
              item.isRevert ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="w-[50%]">
              <ImageHover src={item.img} />
            </div>
            <div className="flex flex-col items-center justify-center w-[50%]">
              <div className="text-start">
                <h4 className="text-4xl text-[#222222]">{item.title}</h4>
                <p className="text-sm text-[#707070]">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
