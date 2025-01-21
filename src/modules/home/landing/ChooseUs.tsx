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
      <h3 className="sm:text-4xl text-3xl text-center text-black font-normal">
        {t("WHY YOU CHOOSE US")}
      </h3>
      <div className="w-full flex flex-col space-y-5 sm:space-y-0">
        {DEFINE_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full flex-col ${
              item.isRevert ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
          >
            <div className="sm:w-[50%] w-full">
              <ImageHover src={item.img} />
            </div>
            <div className="flex flex-col items-center justify-center sm:w-[50%] w-full">
              <div className="text-start space-y-2">
                <h4 className="sm:text-4xl text-3xl text-[#222222]">{item.title}</h4>
                <p className="text-sm text-[#707070] font-bold">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
