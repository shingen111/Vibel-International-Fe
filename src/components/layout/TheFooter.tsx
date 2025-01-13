import { useTranslations } from "next-intl";
import React from "react";
import Visibility from "../base/Visibility";

export default function TheFooter() {
  const t = useTranslations("footer");

  const DEFINE_FOOTERS = [
    {
      title: "Vibel International",
      items: [t("About Us"), t("Our Expert Team")],
    },
    {
      title: t("Our Services"),
      items: [
        t("Franchise Consulting Services"),
        t("Management and Operation Consulting Sevice"),
      ],
    },
    {
      title: t("Contact"),
      items: [
        "070 3538 930",
        "Email: adm@vibel-international.com",
        t("contact_address_1"),
        t("contact_address_2"),
      ],
    },
    {
      title: t("See Us On"),
      icon: (
        // eslint-disable-next-line @next/next/no-img-element
        <img height={20} width={20} src="/icons/facebook.svg" alt="facebook" />
      ),
    },
  ];

  return (
    <div className="bg-[#1B1B1B] w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-center items-center border-t border-[#8E8E8E] mt-[50px] pt-[21px]">
        <div className="container flex justify-between items-start min-h-[325px]">
          {DEFINE_FOOTERS.map((item, index) => (
            <div
              className="flex flex-col justify-start items-start space-y-[15px] max-w-[280px]"
              key={index}
            >
              <span className="text-white text-base font-normal">
                {item.title}
              </span>
              <Visibility visibility={item.items?.length}>
                {item.items?.map((subItem, subIndex) => (
                  <span
                    key={subIndex}
                    className="text-[#8E8E8E] text-sm font-normal"
                  >
                    {subItem}
                  </span>
                ))}
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
    </div>
  );
}
