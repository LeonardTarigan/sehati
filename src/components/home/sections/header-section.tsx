import Image from "next/image";
import React from "react";

export default function HeaderSection() {
  return (
    <section className="h-44 bg-gradient-to-t from-primary-500 to-primary-600 p-5">
      <div className="flex items-center gap-2">
        <div className="relative size-10 overflow-hidden rounded-full bg-primary-100">
          <Image
            src={
              "https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Profile Picture"
            fill
            objectFit="cover"
          />
        </div>
        <h2 className="text-lg font-bold text-white">Siti Yakuzi</h2>
      </div>
    </section>
  );
}
