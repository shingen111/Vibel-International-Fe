import HotelFranchiseConsulting from "@/modules/hotel-franchise-consulting/HotelFranchiseConsulting";
import { IParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";
import React from "react";

interface IProps {
  params: IParams;
}

export default async function page({ params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HotelFranchiseConsulting />;
}
