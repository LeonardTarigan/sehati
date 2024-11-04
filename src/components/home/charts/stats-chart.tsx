"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shared/chart";

export const description =
  "A stacked area chart showing growth in height and weight of a 3-year-old child";

const chartData = [
  { month: "Jan", height: 90, weight: 12.5 },
  { month: "Feb", height: 90.5, weight: 12.7 },
  { month: "Mar", height: 91, weight: 13.0 },
  { month: "Apr", height: 91.5, weight: 13.2 },
  { month: "Mei", height: 92, weight: 13.5 },
  { month: "Jun", height: 92.5, weight: 13.8 },
];

const chartConfig = {
  height: {
    label: "Tinggi (cm)",
    color: "#C9D523",
  },
  weight: {
    label: "Berat (kg)",
    color: "#0DB4A3",
  },
} satisfies ChartConfig;

export function StatsChart() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="weight"
          type="natural"
          fill="var(--color-weight)"
          fillOpacity={0.4}
          stroke="var(--color-weight)"
          stackId="a"
        />
        <Area
          dataKey="height"
          type="natural"
          fill="var(--color-height)"
          fillOpacity={0.4}
          stroke="var(--color-height)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
