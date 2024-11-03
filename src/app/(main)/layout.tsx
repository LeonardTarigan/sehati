"use client";

import BottomNav from "@/components/shared/bottom-nav";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
