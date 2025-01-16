import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function ItemSection({ url }: { url: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-[185px] h-[170px] border border-[#9B9B9B21] border-solid">
      <div
        className="flex justify-center items-center bg-black"
        style={{
          height: 80,
          width: 130,
        }}
      >
        <Image
          height={80}
          width={130}
          src={url}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

const DEFINE_LIST_BRAND = [
  "/explore-hotel-brands/footer_alltra.svg",
  "/explore-hotel-brands/footer_americ-inn-2.svg",
  "/explore-hotel-brands/footer_baymont-2.svg",
  "/explore-hotel-brands/footer_daysinn-1.svg",
  "/explore-hotel-brands/footer_dazzler-2.svg",
  "/explore-hotel-brands/footer_dolce-1.svg",
  "/explore-hotel-brands/footer_echo-1.svg",
  "/explore-hotel-brands/footer_hawthorn-2.svg",
  "/explore-hotel-brands/footer_howard-johnson-1.svg",
  "/explore-hotel-brands/footer_la-quinta.svg",
  "/explore-hotel-brands/footer_microtel-1.svg",
  "/explore-hotel-brands/footer_ramada-2.svg",
  "/explore-hotel-brands/footer_registry.svg",
  "/explore-hotel-brands/footer_super-8-1.svg",
  "/explore-hotel-brands/footer_trademark-1.svg",
  "/explore-hotel-brands/footer_travelodge-1.svg",
  "/explore-hotel-brands/footer_tryp-1.svg",
  "/explore-hotel-brands/footer_wyn-garden-1.svg",
  "/explore-hotel-brands/footer_wyn-grand-1.svg",
  "/explore-hotel-brands/footer_wyngate-1.svg",
  "/explore-hotel-brands/footer-esplendor.svg",
  "/explore-hotel-brands/Wyndham.svg",
  
];

export default function ExploreHotelBrands() {
  const t = useTranslations("explore_hotel_brands");
  return (
    <TheBody
      url="/header-bg/explore-hotel-brands.png"
      title={t("title")}
      description={t("description")}
    >
      <div className="flex flex-col justify-start items-center w-full space-y-[78px]">
        <div className="sm:max-w-[1024] max-w-screen-sm grid sm:grid-cols-5 grid-cols-1 gap-[33px]">
          {DEFINE_LIST_BRAND.map((item, index) => (
            <ItemSection key={index} url={item} />
          ))}
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
