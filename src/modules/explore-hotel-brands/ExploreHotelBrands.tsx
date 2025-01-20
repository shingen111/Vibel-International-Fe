import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function ItemSection({ url, width, height }: { url: string, width?: number, height?: number }) {
  return (
    <div className="flex flex-col justify-center items-center sm:w-[185px] sm:h-[170px] w-[126px] h-[116px] border border-[#9B9B9B21] border-solid p-2">
      <div
        className="flex justify-center items-center"
        style={{
          width: width,
          height: height
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
  "/explore-hotel-brands/1.svg",
  "/explore-hotel-brands/2.svg",
  "/explore-hotel-brands/3.svg",
  "/explore-hotel-brands/4.svg",
  "/explore-hotel-brands/5.svg",
  "/explore-hotel-brands/6.svg",
  "/explore-hotel-brands/7.svg",
  "/explore-hotel-brands/8.svg",
  "/explore-hotel-brands/9.svg",
  "/explore-hotel-brands/10.svg",
  "/explore-hotel-brands/11.svg",
  "/explore-hotel-brands/12.svg",
  "/explore-hotel-brands/13.svg",
  "/explore-hotel-brands/14.svg",
  "/explore-hotel-brands/15.svg",
  "/explore-hotel-brands/16.svg",
  "/explore-hotel-brands/17.svg",
  "/explore-hotel-brands/18.svg",
  "/explore-hotel-brands/19.svg",
  "/explore-hotel-brands/20.svg",
  "/explore-hotel-brands/21.svg",
  "/explore-hotel-brands/22.svg",
  "/explore-hotel-brands/23.svg",
  "/explore-hotel-brands/24.svg",
  "/explore-hotel-brands/25.svg",
  "/explore-hotel-brands/26.svg",
  "/explore-hotel-brands/27.svg",
  "/explore-hotel-brands/28.svg",
  "/explore-hotel-brands/29.svg",
  "/explore-hotel-brands/30.svg",
  "/explore-hotel-brands/31.svg",
  "/explore-hotel-brands/32.svg",
  "/explore-hotel-brands/33.svg",
  "/explore-hotel-brands/34.svg",
  "/explore-hotel-brands/35.svg",
  "/explore-hotel-brands/36.svg",
  "/explore-hotel-brands/37.svg",
  "/explore-hotel-brands/38.svg",
  "/explore-hotel-brands/39.svg",
  "/explore-hotel-brands/40.svg",
  "/explore-hotel-brands/41.svg",
  "/explore-hotel-brands/42.svg",
  "/explore-hotel-brands/43.svg",
  "/explore-hotel-brands/44.svg",
  "/explore-hotel-brands/45.svg",
  "/explore-hotel-brands/46.svg",
  "/explore-hotel-brands/47.svg",
  "/explore-hotel-brands/48.svg",
  "/explore-hotel-brands/49.svg",
  "/explore-hotel-brands/50.svg",
  "/explore-hotel-brands/51.svg",
  "/explore-hotel-brands/52.svg",
  "/explore-hotel-brands/53.svg",
  "/explore-hotel-brands/54.svg",
  "/explore-hotel-brands/55.svg",
  "/explore-hotel-brands/56.svg",
  "/explore-hotel-brands/57.svg",
  "/explore-hotel-brands/58.svg",
  "/explore-hotel-brands/59.svg",
  "/explore-hotel-brands/60.svg",
  "/explore-hotel-brands/61.svg",
  "/explore-hotel-brands/62.svg",
  "/explore-hotel-brands/63.svg",
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
        <div className="sm:max-w-[1024] grid sm:grid-cols-5 grid-cols-2 gap-[18px]">
          {DEFINE_LIST_BRAND.map((item, index) => (
            <ItemSection key={index} url={item} />
          ))}
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
