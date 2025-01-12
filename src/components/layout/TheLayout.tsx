import React from "react";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

export default function TheLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between items-center min-h-[100vh] w-full">
      <TheHeader />
      {children}
      <TheFooter />
    </div>
  );
}
