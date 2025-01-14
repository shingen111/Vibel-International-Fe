import HotelManager from "@/modules/hotel-manager/HotelManager";
import { IParams } from "@/types/params.type";
import { setRequestLocale } from "next-intl/server";
import React from "react";

interface IProps {
  params: IParams;
}

export default async function page({ params }: IProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HotelManager />;
}
