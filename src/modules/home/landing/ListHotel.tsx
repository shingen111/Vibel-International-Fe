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
        <div className="absolute sm:right-0 left-0 sm:left-auto top-[-96px] sm:py-[44px] py-[24px] px-6 bg-[#2E6C92] flex flex-col justify-start items-start sm:min-h-[490px] space-y-[16px] max-w-[256px] sm:max-w-[384px]">
          <h3 className="tsm:text-sm text-xs font-[300] text-white">
            {t("WYNDHAM HOTELS")}
          </h3>
          <p className="sm:text-4xl text-xl text-white font-normal">
            {t("OUR PICK OF WYNDHAM HOTELS")}
          </p>
          <p className="sm:text-sm text-xs text-white font-extralight">
            {t(
              "From a 200 rooms investment opportunity to a new development in Asia, these are the hottest properties you can view right now"
            )}
          </p>
          <Link
            href={"#"}
            className="text-white sm:text-sm text-xs font-extralight !mt-[38px] underline"
          >
            {t("READ MORE")}
          </Link>
        </div>
      </div>
      <div
        className="h-full w-full relative bg-cover bg-center bg-no-repeat bg-header min-h-[186px]"
        style={{
          backgroundImage: "url(/list-hotel/list_hotel_section_2.png)",
        }}
      >
        <div className="max-w-[256px] py-[24px] sm:py-[44px] px-6 flex flex-col justify-start items-start bg-white h-full sm:max-w-[384px] sm:float-start float-end">
          <h3 className="sm:text-sm text-xs text-[#2E6C92] font-extralight">
            {t("HOT PROPERTY")}
          </h3>
          <p className="uppercase sm:text-4xl text-xl font-normal text-black sm:mt-[37px] mt-[12px]">
            {t("View a selection of the finest new developments")}
          </p>
          <p className="sm:mt-[110px] mt-[20px] sm:text-sm text-xs font-extralight">
            {t(
              "The finest new hotels & resorts in Asia, from beautiful beaches to the largest mixed-use developments in the city"
            )}
          </p>
          <Link
            href={"#"}
            className="text-[#2E6C92] sm:text-sm text-xs font-extralight mt-[38px] underline"
          >
            {t("READ MORE")}
          </Link>
        </div>
      </div>
    </div>
  );
}
