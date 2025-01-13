import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ListHotel() {
  const t = useTranslations("list_hotel");
  return (
    <div className="w-full min-h-[586px] pt-[96px] grid sm:grid-cols-2 grid-cols-1">
      <div className="h-full relative">
        <Image
          src="/list-hotel/list_hotel_section.png"
          width={1220}
          height={1220}
          alt="img_1"
          className="object-cover w-full h-full"
        />
        <div className="absolute right-0 top-[-96px] py-[44px] px-6 bg-[#2E6C92] flex flex-col justify-start items-start w-[384px] min-h-[490px] space-y-[16px]">
          <h3 className="text-sm font-[300] text-white">{t("WYNDHAM HOTELS")}</h3>
          <p className="text-4xl text-white font-normal">{t("OUR PICK OF WYNDHAM HOTELS")}</p>
          <p className="text-sm text-white font-extralight">{t("From a 200 rooms investment opportunity to a new development in Asia, these are the hottest properties you can view right now")}</p>
          <Link
            href={"#"}
            className="text-white text-sm font-extralight !mt-[38px] underline"
          >
            {t("READ MORE")}
          </Link>
        </div>
      </div>
      <div
        className="h-full w-full relative bg-cover bg-center bg-no-repeat bg-header"
        style={{
          backgroundImage: "url(/list-hotel/list_hotel_section_2.png)",
        }}
      >
        <div className="max-w-[384px] py-[28px] px-[36px] flex flex-col justify-start items-start bg-white h-full">
          <h3 className="text-sm text-[#2E6C92] font-extralight">
            {t("HOT PROPERTY")}
          </h3>
          <p className="uppercase text-4xl font-normal text-black mt-[37px]">
            {t("View a selection of the finest new developments")}
          </p>
          <p className="mt-[110px] text-sm font-extralight ">
            {t(
              "The finest new hotels & resorts in Asia, from beautiful beaches to the largest mixed-use developments in the city"
            )}
          </p>
          <Link
            href={"#"}
            className="text-[#2E6C92] text-sm font-extralight mt-[38px] underline"
          >
            {t("READ MORE")}
          </Link>
        </div>
      </div>
    </div>
  );
}
