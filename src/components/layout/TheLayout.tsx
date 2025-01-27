import React from "react";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

export default function TheLayout({ children, theHeader }: { children: React.ReactNode, theHeader?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between items-center min-h-[100vh] w-full">
      {theHeader ?? <TheHeader />}
      {children}
      <TheFooter />
    </div>
  );
}
