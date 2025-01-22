import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { DEFINE_ROUTERS } from "@/constants/routers";
import TheMobileHeader from "./TheMobileHeader";
import BaseButtonWhite from "@/components/base/BaseButtonWhite";
import SwitchLanguage from "@/components/base/SwitchLanguage";

function DesktopHeader() {
  const t = useTranslations("header");
  const DEFINE_MENUS = [
    {
      label: t("menu-1"),
      href: DEFINE_ROUTERS.hotelManager,
    },
    {
      label: t("menu-2"),
      href: DEFINE_ROUTERS.hotelFranchiseConsulting,
    },
    {
      label: t("menu-3"),
      href: DEFINE_ROUTERS.exploreHotelBrands,
    },
    {
      label: t("menu-4"),
      href: `${DEFINE_ROUTERS.insights}?page=1`,
    },
    {
      label: t("menu-5"),
      href: DEFINE_ROUTERS.aboutUs,
    },
  ];

  return (
    <div className="flex-col w-full justify-center items-center bg-[#2E6C92] absolute top-0 left-0 right-0 z-50 sm:flex hidden">
      <div className="flex justify-center items-center w-full mb-[14px] mt-[19px]">
        <span className="text-sm text-white">{t("title")}</span>
      </div>
      <div className="border-t w-full flex justify-center items-center h-[100px]">
        <div className="container flex justify-between items-center w-full space-x-[30px] ">
          <Link href={"/"}>
            <Image
              className="hover-grow"
              height={97}
              width={164}
              src="/logo.svg"
              alt={"Logo"}
            />
          </Link>
          <div className="flex items-center w-full flex-wrap justify-center space-x-[20px]">
            {DEFINE_MENUS.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="cursor-pointer text-white sm:text-sm font-normal whitespace-nowrap hover-grow">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <BaseButtonWhite
            title={t("contact")}
            href={DEFINE_ROUTERS.bookMeeting}
          />
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
}

export default function TheHeaderInsightDetail() {
  return (
    <>
      <DesktopHeader />
      <TheMobileHeader />
    </>
  );
}
