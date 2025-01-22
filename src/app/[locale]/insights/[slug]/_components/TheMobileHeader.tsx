"use client";

import BaseDrawer from "@/components/base/BaseDrawer";
import { Link } from "@/i18n/routing";
import { AppBar, IconButton } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function TheMobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, lastScrollY]);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-transparent absolute top-0 left-0 right-0 z-50 sm:hidden">
      <AppBar
        position="fixed"
        style={{
          transition: "top 0.3s",
          top: `${showHeader ? 0 : 0}px`,
          background: `${lastScrollY < 50 ? "transparent" : "black"}`,
        }}
      >
        <div className="border-b w-full flex justify-center items-center sm:h-[100px] h-auto">
          <div className="container flex justify-between items-center w-full space-x-[54px]">
            <Link href={"/"} className="sm:w-[107px] w-[62px]">
              <Image
                className="hover-grow"
                height={97}
                width={107}
                src="/logo.svg"
                alt={"Logo"}
              />
            </Link>
            <IconButton
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <Image
                height={20}
                width={20}
                src="/icons/menu-icon.png"
                alt="menu"
              />
            </IconButton>
            <BaseDrawer
              open={isOpen}
              onToggle={(open: boolean) => {
                setIsOpen(open);
              }}
            />
          </div>
        </div>
      </AppBar>
    </div>
  );
}
