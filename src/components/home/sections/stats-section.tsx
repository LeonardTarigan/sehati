import React from "react";
import { StatsChart } from "../charts/stats-chart";

export default function StatsSection() {
  return (
    <section className="space-y-2 p-5">
      <h2 className="text-xl font-bold">Perkembangan Anak</h2>
      <StatsChart />
    </section>
  );
}
