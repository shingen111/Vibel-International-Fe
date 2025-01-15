import React from "react";
import TheHeaderBackground from "../base/TheHeaderBackground";

interface IProps {
  children: React.ReactNode;
  url: string;
  title: string;
  description?: string;
}

export default function TheBody({ children, url, title, description }: IProps) {
  return (
    <div className="w-full">
      <TheHeaderBackground url={url} title={title} description={description} />
      <div className="sm:p-[64px] p-[20px] flex justify-start items-center bg-white">{children}</div>
    </div>
  );
}
