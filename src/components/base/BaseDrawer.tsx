import React from "react";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { DEFINE_ROUTERS } from "@/constants/routers";
import BaseButtonWhite from "./BaseButtonWhite";
import SwitchLanguage from "./SwitchLanguage";

interface IProps {
  open: boolean;
  onToggle: (open: boolean) => void;
}

const BaseDrawer: React.FC<IProps> = ({ open, onToggle }) => {
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
    {
      label: t("menu-6"),
      href: DEFINE_ROUTERS.representative,
    },
  ];
  const list = () => (
    <div
      role="presentation"
      onClick={() => onToggle(false)}
      onKeyDown={() => onToggle(false)}
      className="flex flex-col justify-start items-center space-y-3 h-full w-[255px] bg-black"
    >
      <Link
        href="/"
        className="border-b border-white w-full flex justify-center items-center"
      >
        <Image
          className="hover-grow"
          height={97}
          width={107}
          src="/logo.svg"
          alt="Logo"
        />
      </Link>
      <List
        sx={{
          borderBottom: "1px solid white",
        }}
      >
        {DEFINE_MENUS.map((menu, index) => (
          <ListItem key={index} component="a" href={menu.href}>
            <Typography fontSize={12} color="white">
              {menu.label}
            </Typography>
          </ListItem>
        ))}
      </List>
      <span className="sm:text-sm text-xs text-white text-center w-full px-12">
        {" "}
        {t("title")}
      </span>
      <BaseButtonWhite title={t("contact")} href={DEFINE_ROUTERS.bookMeeting} />
      <SwitchLanguage />
    </div>
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => onToggle(false)}>
      {list()}
    </Drawer>
  );
};

export default BaseDrawer;
