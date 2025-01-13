import ImageHover from "@/components/base/ImageHover";
import { useTranslations } from "next-intl";
import React from "react";

export default function ServiceLanding() {
  const t = useTranslations("service_landing");

  const DEFINE_SERVICE = [
    {
      title: t("service_1"),
      image: "/landing/service/service_1.png",
    },
    {
      title: t("service_2"),
      image: "/landing/service/service_2.png",
    },
    {
      title: t("service_3"),
      image: "/landing/service/service_3.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-12 space-y-7 w-full bg-[#F5F5F5]">
      <h3 className="text-4xl text-black font-normal">{t("OUR SERVICES")}</h3>
      <div className="flex flex-row justify-center items-center space-x-[91px]">
        {DEFINE_SERVICE.map((item, index) => (
          <div className="flex flex-col items-center w-[300px]" key={index}>
            <ImageHover src={item.image} />
            <div className="bg-white h-[258px] w-full flex justify-center items-center">
              <h4 className="text-xl text-black font-light text-center">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
