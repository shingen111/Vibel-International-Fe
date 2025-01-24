import { useTranslations } from "next-intl";
import React from "react";
import Visibility from "../base/Visibility";
import { Link } from "@/i18n/routing";
import { DEFINE_ROUTERS } from "@/constants/routers";
import Image from "next/image";
import ScrollToTopBtn from "../base/ScrollToTop";
import { Tooltip } from "@mui/material";

function TextFormat({ text }: { text: string }) {
  return (
    <span key={1} className="text-[#8E8E8E] text-sm font-normal">
      {text}
    </span>
  );
}

export default function TheFooter() {
  const t = useTranslations("footer");

  const DEFINE_FOOTERS = [
    {
      title: "Vibel International",
      items: [
        <Link key={1} href={DEFINE_ROUTERS.aboutUs}>
          <TextFormat text={t("About Us")} />
        </Link>,
        <TextFormat key={2} text={t("Our Expert Team")} />,
      ],
    },
    {
      title: t("Our Services"),
      items: [
        <Link
          href={DEFINE_ROUTERS.hotelManager}
          key={1}
          className="text-[#8E8E8E] text-sm font-normal"
        >
          {t("Franchise Consulting Services")}
        </Link>,
        <Link
          href={DEFINE_ROUTERS.hotelFranchiseConsulting}
          key={2}
          className="text-[#8E8E8E] text-sm font-normal"
        >
          {t("Management and Operation Consulting Sevice")}
        </Link>,
        <Link
          href={DEFINE_ROUTERS.developConsulting}
          key={3}
          className="text-[#8E8E8E] text-sm font-normal"
        >
          {t("Development Consulting and Project Supervision")}
        </Link>,
      ],
    },
    {
      title: t("Contact"),
      items: [
        <Tooltip title="Click to call" key={1}>
          <Link href={"tel:070 3538 930"}>
            <TextFormat text="070 3538 930" />
          </Link>
        </Tooltip>,
        <Tooltip title="Click to mail" key={2}>
          <Link href={"mailto:adm@vibel-international.com"}>
            <TextFormat text="Email: adm@vibel-international.com" />
          </Link>
        </Tooltip>,
        <TextFormat key={3} text={t("contact_address_1")} />,
        <TextFormat key={4} text={t("contact_address_2")} />,
      ],
    },
    {
      title: t("See Us On"),
      icon: (
        <Link className="h-[20px] w-[10px]" href="https://www.facebook.com/vibelinternationaljsc" target="_blank">
          <Image
            height={20}
            width={20}
            src="/icons/facebook_2.svg"
            alt="facebook"
          />
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-[#1B1B1B] w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-center items-center border-t border-[#8E8E8E] mt-[50px] pt-[21px]">
        <div className="container flex sm:flex-row flex-col justify-between items-start min-h-[325px] sm:space-y-0 space-y-10 sm:pb-0 pb-10">
          {DEFINE_FOOTERS.map((item, index) => (
            <div
              className="flex flex-col justify-start items-start space-y-[15px] max-w-[280px]"
              key={index}
            >
              <span className="text-white text-base font-normal">
                {item.title}
              </span>
              <Visibility visibility={item.items?.length}>
                <div className="flex flex-col justify-start items-start space-y-1">
                  {item.items?.map((item, subIndex) => (
                    <div key={subIndex}>{item}</div>
                  ))}
                </div>
              </Visibility>
              <Visibility visibility={item.icon}>{item.icon}</Visibility>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center py-[25px] bg-[#161616] w-full">
        <span className="text-[#8E8E8E] text-sm font-normal">
          © 2025 Vibel International JSC. All Rights Reserved
        </span>
      </div>
      <ScrollToTopBtn />
    </div>
  );
}
