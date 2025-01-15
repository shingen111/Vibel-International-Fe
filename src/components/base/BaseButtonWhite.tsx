import { Link } from "@/i18n/routing";
import React from "react";

interface IProps {
  title: string;
  href: string;
}

export default function BaseButtonWhite({ title, href }: IProps) {
  return (
    <Link
      href={href}
      className="text-white p-[14px] flex justify-center items-center bg-transparent border border-white rounded-md hover:bg-white hover:bg-opacity-30"
    >
      <span className="whitespace-nowrap sm:text-sm text-xs font-extralight">{title}</span>
    </Link>
  );
}
