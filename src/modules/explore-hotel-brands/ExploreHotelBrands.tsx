import BaseContactSection from "@/components/base/BaseContactSection";
import TheBody from "@/components/layout/TheBody";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function ItemSection({ url }: { url: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-[185px] h-[170px] border border-[#9B9B9B21] border-solid">
      <div
        className="flex justify-center items-center"
        style={{
          height: 80,
          width: 130,
        }}
      >
        <Image
          height={80}
          width={133}
          src={url}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

const DEFINE_LIST_BRAND = [
  "/explore-hotel-brands/wyndham.png",
  "/explore-hotel-brands/accor.png",
  "/explore-hotel-brands/marriott.png",
  "/explore-hotel-brands/belmond.svg",
  "/explore-hotel-brands/conrad.svg",
  "/explore-hotel-brands/fairmont.svg",
  "/explore-hotel-brands/IHG.svg",
  "/explore-hotel-brands/kempinski.svg",
  "/explore-hotel-brands/mandarin-oriental.svg",
  "/explore-hotel-brands/park-hyatt.svg",
  "/explore-hotel-brands/treferred.svg",
  "/explore-hotel-brands/relais-chateaux.svg",
  "/explore-hotel-brands/rose-wood.svg",
  "/explore-hotel-brands/shangri-la.svg",
  "/explore-hotel-brands/singita.svg",
  "/explore-hotel-brands/six-senses.svg",
  "/explore-hotel-brands/small-luxury-hotels.svg",
  "/explore-hotel-brands/the-leading-hotels.svg",
  "/explore-hotel-brands/the-peninsula.svg",
  "/explore-hotel-brands/waldorf-astoria.svg",
  "/explore-hotel-brands/aman.svg",
  "/explore-hotel-brands/andaz.png",
  "/explore-hotel-brands/banyan-tree.svg",
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
        <div className="max-w-[1024] grid grid-cols-5 gap-[33px]">
          {DEFINE_LIST_BRAND.map((item, index) => (
            <ItemSection key={index} url={item} />
          ))}
        </div>
        <BaseContactSection />
      </div>
    </TheBody>
  );
}
