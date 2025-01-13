import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function BaseButtonWhite({ title, ...props }: IProps) {
  return (
    <button
      {...props}
      type="button"
      className="text-white p-[14px] flex justify-center items-center bg-transparent border border-white rounded-md hover:bg-white hover:bg-opacity-30"
    >
      <span className="whitespace-nowrap text-sm font-extralight">{title}</span>
    </button>
  );
}
