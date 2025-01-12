"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  locale: TLocale;
}

type TLocale = "en" | "vi";

function SwitchLanguage({ locale }: IProps) {
  return (
    <div className="flex justify-between items-center">
      <Link href="/" locale="vi">
        <div
          className={`cursor-pointer text-white ${
            locale === "vi" ? "font-bold" : ""
          }`}
        >
          VietNam
        </div>
      </Link>
      <Link href="/" locale="en">
        <div
          className={`cursor-pointer text-white ${
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
  // const { locale } = useRouter();
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
    <div className="flex flex-col w-full justify-center items-center mt-[13px] bg-transparent">
      <div className="flex justify-start items-center w-full mb-[14px]">
        {t("title")}
      </div>
      <div className="container flex justify-between items-center w-full space-x-[54px]">
        <Link href={"/"}>
          <Image height={97} width={107} src="/logo.svg" alt={"Logo"} />
        </Link>
        <div className="flex justify-between items-center w-full space-x-[30px]">
          {DEFINE_MENUS.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="cursor-pointer text-white text-sm font-normal">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <SwitchLanguage locale="vi" />
      </div>
    </div>
  );
}
