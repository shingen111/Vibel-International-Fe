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
        <h1 className="text-[64px] font-bold">{title}</h1>
        <Visibility visibility={description}>
          <p className="text-base">{description}</p>
        </Visibility>
      </div>
    </div>
  );
}
