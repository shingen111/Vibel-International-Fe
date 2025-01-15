import React from "react";
import Visibility from "./Visibility";

interface IProps {
  url: string;
  title: string;
  description?: string;
}

export default function TheHeaderBackground({
  url,
  title,
  description,
}: IProps) {
  return (
    <div
      className="h-[734px] object-cover w-full bg-cover bg-center bg-no-repeat bg-header"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="flex flex-col justify-center items-center h-full w-full text-white">
        <h1 className="sm:text-[64px] text-[42px] font-normal sm:text-center text-left px-10 w-full">
          {title}
        </h1>
        <Visibility visibility={description}>
          <p className="sm:text-base sm:p-0 px-10 sm:text-center text-left text-sm max-w-[1058px]">{description}</p>
        </Visibility>
      </div>
    </div>
  );
}
