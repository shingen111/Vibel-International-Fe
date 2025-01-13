"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type TLocale = "en" | "vi";

function SwitchLanguage() {
  const router = useRouter();
  const locale = router.locale as TLocale;

  return (
    <div className="flex flex-row justify-between items-center space-x-1">
      <Link href={router.asPath} locale="vi">
        <div
          className={`cursor-pointer text-white hover-grow ${
            locale === "vi" ? "font-bold" : ""
          }`}
        >
          VietNam
        </div>
      </Link>
      <span className="text-white">|</span>
      <Link href={router.asPath} locale="en">
        <div
          className={`cursor-pointer text-white hover-grow ${
            locale === "en" ? "font-bold" : ""
          }`}
        >
          English
        </div>
      </Link>
    </div>
  );
}

export default function TheHeader() {
  const t = useTranslations("header");
  const DEFINE_MENUS = [
    {
      label: t("menu-1"),
      href: "/hotel-manager",
    },
    {
      label: t("menu-2"),
      href: "/hotel-consulting",
    },
    {
      label: t("menu-3"),
      href: "/explore-brand",
    },
    {
      label: t("menu-4"),
      href: "/contact",
    },
    {
      label: t("menu-5"),
      href: "/about-us",
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center mt-[13px] bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="flex justify-center items-center w-full mb-[14px] text-white">
        {t("title")}
      </div>
      <div className="container flex justify-between items-center w-full space-x-[54px]">
        <Link href={"/"}>
          <Image
            className="hover-grow"
            height={97}
            width={107}
            src="/logo.svg"
            alt={"Logo"}
          />
        </Link>
        <div className="flex justify-between items-center w-full space-x-[30px]">
          {DEFINE_MENUS.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="cursor-pointer text-white text-sm font-normal whitespace-nowrap hover-grow">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="text-white p-[14px] flex justify-center items-center bg-transparent border border-white rounded-md hover:bg-white hover:bg-opacity-30"
        >
          <span className="whitespace-nowrap text-sm">{t("contact")}</span>
        </button>
        <SwitchLanguage />
      </div>
    </div>
  );
}
