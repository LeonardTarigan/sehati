"use client";

import BottomNav from "@/components/shared/bottom-nav";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);
dayjs.locale("id");

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-24">
      {children}
      <BottomNav />
    </div>
  );
}
