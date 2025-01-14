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
        <h1 className="sm:text-[64px] text-[52px] font-normal sm:text-center text-left px-10">
          {title}
        </h1>
        <Visibility visibility={description}>
          <p className="text-base max-w-[1058px] text-center">{description}</p>
        </Visibility>
      </div>
    </div>
  );
}
