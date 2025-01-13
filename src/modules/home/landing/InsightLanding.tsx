import ImageHover from "@/components/base/ImageHover";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

export default function InsightLanding() {
  const t = useTranslations("");

  const DEFINE_SERVICE = [
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
    {
      title: "A Different Kind of All-Inclusive",
      description: "Sophistication doesn’t need a wristband to impress.",
      image: "/landing/insight.png",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center space-y-6 w-full bg-white">
      <h3 className="text-4xl text-black font-normal uppercase">insights</h3>
      <div className="flex flex-row justify-center items-center space-x-[100px]">
        {DEFINE_SERVICE.map((item, index) => (
          <div className="flex flex-col items-center w-[329px]" key={index}>
            <ImageHover src={item.image} />
            <p className="text-[#808284] text-xs font-medium text-start w-full">WYNDHAM HOTEL</p>
            <span className="text-start text-[20px] font-[700] mt-[18px] w-full">
              {item.title}
            </span>
            <p className="mt-[16px] text-base text-[#808284] font-normal">
              {item.description}
            </p>
            <Link href={"#"} className="text-start text-[#2E6C92] text-base font-normal w-full first-letter:uppercase">
              {t("read_more")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
